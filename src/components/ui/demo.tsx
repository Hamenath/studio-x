"use client"

import { ShaderBackground } from "@/components/ui/purp-wave-shader"
import { GlassReveal21st, StudioXGlassReveal } from "@/components/ui/liquid-glass-logo-reveal"

export function ShaderBackgroundDemo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderBackground className="h-full w-full" />
    </div>
  )
}

export function GlassReveal21stDemo() {
  return <GlassReveal21st className="h-svh min-h-105 w-full" />
}

export function StudioXGlassRevealDemo() {
  return <StudioXGlassReveal className="h-svh min-h-105 w-full" />
}

export default ShaderBackgroundDemo
