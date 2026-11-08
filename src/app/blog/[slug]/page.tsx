import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "design-beyond-limits" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createMetadata(
    `Article: ${slug} — Studio Journal`,
    "Design perspectives and insights from Studio X.",
    `/blog/${slug}`
  );
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="bg-sx-white py-24 md:py-36 px-6 md:px-12 flex flex-col items-center justify-center min-h-[calc(100svh-72px)]">
      <div className="max-w-xl mx-auto text-center border border-sx-light p-12 md:p-16 bg-sx-off">
        <span className="font-mono text-xs uppercase tracking-widest text-sx-mid block mb-4">
          Editorial Notice
        </span>

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-sx-black mb-4">
          Article In Draft
        </h1>

        <p className="text-sm md:text-base text-sx-dark leading-relaxed mb-4">
          The article <code className="bg-sx-light/60 px-1.5 py-0.5 font-mono text-xs text-sx-black">&quot;{slug}&quot;</code> is currently undergoing editorial review and has not yet been published.
        </p>

        <p className="text-xs text-sx-mid leading-relaxed mb-8">
          Studio X essays are released after comprehensive studio review. Genuine articles will appear on our primary journal index upon release.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/blog" variant="primary" size="md">
            <span className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </span>
          </Button>
          <Button href="/" variant="secondary" size="md">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
