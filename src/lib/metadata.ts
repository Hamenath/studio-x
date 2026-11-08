import type { Metadata } from "next";

export const siteUrl = "https://studioxdesign.space";
export const siteName = "Studio X";
export const defaultDescription =
  "Studio X is an independent creative design studio focused on building distinctive brands, digital experiences, and visual communication.";

export function createMetadata(
  title: string,
  description: string = defaultDescription,
  _path: string = "/"
): Metadata {
  void _path;
  const pageTitle = title.includes("Studio X") ? title : `${title} | Studio X`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      type: "website",
      // url: `${siteUrl}${path}`, // Uncomment after DNS verified
      siteName,
      title: pageTitle,
      description,
      images: [
        {
          url: "/brand/studiox-logo-master-preview.png",
          width: 1200,
          height: 630,
          alt: "Studio X — Design Beyond Limits.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/brand/studiox-logo-master-preview.png"],
    },
    // alternates: {
    //   canonical: `${siteUrl}${path}`, // Uncomment after DNS verified
    // },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
