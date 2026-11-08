"use client"

import * as React from "react"
import { SilkMeshShaderHero } from "./silk-mesh-shader-hero"

export function SilkMeshShaderHeroDemo() {
  return (
    <div className="w-full min-h-screen bg-sx-black">
      <SilkMeshShaderHero
        eyebrow="Studio X / Independent Creative Agency / Tamil Nadu, India"
        title={"DESIGN\nBEYOND\nLIMITS."}
        description="We craft high-impact digital experiences, brand identities, and editorial design for ambitious creators and enterprises worldwide."
        primaryCta={{ label: "Explore Our Work", href: "/portfolio" }}
        secondaryCta={{ label: "Start a Project", href: "/contact" }}
        caption="Studio X\nTamil Nadu, India"
        palette="studiox"
        height="100vh"
      />
    </div>
  )
}

export default SilkMeshShaderHeroDemo

