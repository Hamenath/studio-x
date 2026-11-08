"use client";

interface ProjectVisualPreviewProps {
  category: string;
  title: string;
  className?: string;
}

export default function ProjectVisualPreview({
  category,
  title,
  className = "",
}: ProjectVisualPreviewProps) {
  return (
    <div
      className={`relative aspect-16/10 w-full bg-sx-black border border-sx-dark/50 overflow-hidden mb-6 flex flex-col justify-between p-4 group-hover:border-sx-mid transition-colors duration-300 ${className}`}
    >
      {/* Corner crosshairs */}
      <span className="absolute top-2 left-2 font-mono text-[9px] text-sx-dark select-none">+</span>
      <span className="absolute top-2 right-2 font-mono text-[9px] text-sx-dark select-none">+</span>
      <span className="absolute bottom-2 left-2 font-mono text-[9px] text-sx-dark select-none">+</span>
      <span className="absolute bottom-2 right-2 font-mono text-[9px] text-sx-dark select-none">+</span>

      {/* Internal graphic scaled on hover */}
      <div className="w-full h-full flex flex-col justify-between transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        {/* Top bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-sx-mid tracking-wider border-b border-sx-dark/40 pb-2">
          <span>REF / {category.toUpperCase()}</span>
          <span>CONCEPT DEMO</span>
        </div>

        {/* Center architectural graphic according to category */}
        <div className="my-auto py-3 flex items-center justify-center">
          {category === "Branding" && (
            <div className="flex flex-col items-center justify-center border border-dashed border-sx-dark/70 p-4 w-3/4">
              <span className="font-heading font-extrabold text-2xl md:text-3xl tracking-widest text-sx-white">
                STUDIO X
              </span>
              <span className="font-mono text-[9px] text-sx-mid tracking-widest mt-1">
                GRID RATIO 1:1.618
              </span>
            </div>
          )}

          {category === "Web Design" && (
            <div className="w-4/5 border border-sx-dark bg-sx-soft/60 p-2 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 border-b border-sx-dark/60 pb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sx-dark"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-sx-dark"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-sx-dark"></span>
                <span className="ml-2 font-mono text-[9px] text-sx-mid">
                  studioxdesign.space
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 h-10">
                <div className="bg-sx-dark/40 col-span-2"></div>
                <div className="bg-sx-dark/20 col-span-1"></div>
              </div>
            </div>
          )}

          {category === "Social Media" && (
            <div className="w-3/5 border border-sx-dark bg-sx-soft p-3 flex flex-col justify-between h-20">
              <div className="flex items-center justify-between font-mono text-[8px] text-sx-mid">
                <span>@STUDIOX</span>
                <span>4:5 PORTRAIT</span>
              </div>
              <div className="space-y-1">
                <div className="h-1 bg-sx-mid/60 w-3/4"></div>
                <div className="h-1 bg-sx-dark/60 w-1/2"></div>
              </div>
            </div>
          )}

          {category === "Posters" && (
            <div className="w-3/5 border-2 border-sx-white/80 p-3 text-center flex flex-col justify-between h-20">
              <span className="font-mono text-[8px] text-sx-mid tracking-widest">
                A1 FORMAT / EDITORIAL
              </span>
              <span className="font-heading font-bold text-base md:text-lg tracking-tight text-sx-white">
                POSTER X
              </span>
              <span className="font-mono text-[8px] text-sx-mid">
                LIMITED EDITION
              </span>
            </div>
          )}

          {category === "Motion" && (
            <div className="w-4/5 border border-sx-dark p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[9px] text-sx-mid mb-2">
                <span>00:15 / 4K UHD</span>
                <span>60 FPS</span>
              </div>
              <div className="flex items-center gap-1 h-6">
                {[40, 70, 30, 90, 60, 20, 80, 50, 95, 45, 65, 35].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-sx-white/60"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          )}

          {category === "Print Design" && (
            <div className="w-4/5 border border-sx-dark p-2.5 flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-[8px] text-sx-mid">
                <span>CATALOGUE / FOLIO</span>
                <span>300 GSM</span>
              </div>
              <div className="grid grid-cols-2 gap-2 h-10 border-t border-sx-dark/50 pt-1.5">
                <div className="border border-dashed border-sx-dark/60 flex items-center justify-center font-mono text-[8px] text-sx-dark">
                  P. 01
                </div>
                <div className="border border-dashed border-sx-dark/60 flex items-center justify-center font-mono text-[8px] text-sx-dark">
                  P. 02
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom meta */}
        <div className="flex items-center justify-between text-[9px] font-mono text-sx-mid pt-2 border-t border-sx-dark/40">
          <span className="truncate max-w-50">{title}</span>
          <span>STUDIO X CONCEPT</span>
        </div>
      </div>
    </div>
  );
}

