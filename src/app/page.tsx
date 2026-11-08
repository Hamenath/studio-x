import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Studio X — Design Beyond Limits.",
  "Studio X is an independent creative design studio in Tamil Nadu, India. Building distinctive brands, digital experiences, and visual communication.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
