import { spawn } from "child_process";
import fs from "fs";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9222;

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const chrome = spawn(CHROME_PATH, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    "--window-size=1440,900",
    "--hide-scrollbars",
    "--disable-gpu",
    "http://localhost:3000",
  ]);

  try {
    await wait(2500);

    const versionRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    const tabs = await versionRes.json();
    const pageTab = tabs.find((t) => t.type === "page") || tabs[0];

    if (!pageTab || !pageTab.webSocketDebuggerUrl) {
      console.error("Could not find page websocket target");
      return;
    }

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = rej;
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const curId = id++;
        const handler = (msg) => {
          const data = JSON.parse(msg.data);
          if (data.id === curId) {
            ws.removeEventListener("message", handler);
            resolve(data.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id: curId, method, params }));
      });
    }

    await send("Page.enable");
    await send("Runtime.enable");

    // Dynamic scroll positions based on actual section DOM nodes
    const sections = [
      { name: "01-hero", selector: "section[aria-labelledby='hero-title']" },
      { name: "02-intro", selector: "section[aria-labelledby='intro-heading']" },
      { name: "03-services", selector: "section[aria-labelledby='services-heading']" },
      { name: "04-work", selector: "section[aria-labelledby='work-heading']" },
      { name: "05-why", selector: "section[aria-labelledby='why-heading']" },
      { name: "06-process", selector: "section[aria-labelledby='process-heading']" },
      { name: "07-testimonials", selector: "section[aria-labelledby='testimonials-heading']" },
      { name: "08-cta", selector: "section[aria-labelledby='cta-heading']" },
      { name: "09-footer", selector: "footer" },
    ];

    for (const sec of sections) {
      await send("Runtime.evaluate", {
        expression: `
          (() => {
            const el = document.querySelector("${sec.selector}");
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 72;
              window.scrollTo({ top: Math.max(0, y), behavior: 'instant' });
              window.dispatchEvent(new Event('scroll'));
            }
          })();
        `,
      });
      await wait(800);

      const shot = await send("Page.captureScreenshot", { format: "png" });
      if (shot && shot.data) {
        fs.writeFileSync(
          `c:/Users/hamen/Desktop/Studio-X/screenshots/${sec.name}.png`,
          Buffer.from(shot.data, "base64")
        );
        console.log(`Captured ${sec.name}.png`);
      }
    }

    // Scroll through entire page to trigger all reveals, then capture full page
    await send("Runtime.evaluate", {
      expression: `
        document.querySelectorAll('.reveal').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      `,
    });
    await wait(400);

    // Reset to top at normal viewport before full page capture
    await send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send("Runtime.evaluate", {
      expression: "window.scrollTo(0, 0);",
    });
    await wait(500);

    const fullShot = await send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
    });
    if (fullShot && fullShot.data) {
      fs.writeFileSync(
        "c:/Users/hamen/Desktop/Studio-X/screenshots/homepage-full.png",
        Buffer.from(fullShot.data, "base64")
      );
      console.log("Captured homepage-full.png");
    }

    // Now tablet (768)
    await send("Emulation.setDeviceMetricsOverride", {
      width: 768,
      height: 1024,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send("Runtime.evaluate", {
      expression: "window.scrollTo(0, 0);",
    });
    await wait(500);
    const tabletShot = await send("Page.captureScreenshot", { format: "png" });
    if (tabletShot && tabletShot.data) {
      fs.writeFileSync(
        "c:/Users/hamen/Desktop/Studio-X/screenshots/tablet-hero.png",
        Buffer.from(tabletShot.data, "base64")
      );
      console.log("Captured tablet-hero.png");
    }

    // Mobile (390)
    await send("Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
    await send("Runtime.evaluate", {
      expression: "window.scrollTo(0, 0);",
    });
    await wait(500);
    const mobileShot = await send("Page.captureScreenshot", { format: "png" });
    if (mobileShot && mobileShot.data) {
      fs.writeFileSync(
        "c:/Users/hamen/Desktop/Studio-X/screenshots/mobile-hero.png",
        Buffer.from(mobileShot.data, "base64")
      );
      console.log("Captured mobile-hero.png");
    }

    ws.close();
  } catch (err) {
    console.error("Error in capture script:", err);
  } finally {
    chrome.kill();
  }
}

main();
