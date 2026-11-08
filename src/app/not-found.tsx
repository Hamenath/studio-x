import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-sx-white min-h-[calc(100svh-72px)] flex items-center justify-center py-20 px-6 md:px-12">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-heading font-extrabold text-[clamp(96px,18vw,200px)] leading-[0.9] tracking-tighter text-sx-black block select-none">
          404
        </span>

        <h1 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-sx-black mt-6 mb-4">
          This page doesn&apos;t exist.
        </h1>

        <p className="text-base text-sx-dark max-w-[42ch] mx-auto mb-10 leading-relaxed">
          The requested coordinate could not be resolved. The resource may have been
          relocated or retired.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Return home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact studio
          </Button>
        </div>
      </div>
    </div>
  );
}
