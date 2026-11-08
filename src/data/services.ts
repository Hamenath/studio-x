export interface ServiceItem {
  name: string;
  description: string;
  startingPrice: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  items: ServiceItem[];
  benefits: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "branding",
    name: "Branding & Identity",
    tagline: "Build a brand that people remember.",
    description:
      "Every strong business begins with a clear identity. We design brand systems that communicate who you are, what you stand for, and why you matter — across every touchpoint.",
    items: [
      {
        name: "Logo Design",
        description:
          "A distinctive mark crafted to represent your business at every scale, from business cards to billboards.",
        startingPrice: "₹999",
      },
      {
        name: "Brand Identity",
        description:
          "Complete visual identity: logo, colour palette, typography, iconography and usage guidelines.",
        startingPrice: "₹4,999",
      },
      {
        name: "Brand Guidelines",
        description:
          "A clear standards document ensuring your brand is used consistently across all media and teams.",
        startingPrice: "₹2,999",
      },
      {
        name: "Business Stationery",
        description:
          "Visiting cards, letterheads, envelopes and other stationery designed to your brand standards.",
        startingPrice: "₹499",
      },
    ],
    benefits: [
      "Builds instant trust and recognition",
      "Consistent across all platforms and formats",
      "Scalable from print to digital",
      "Delivered with editable source files",
    ],
  },
  {
    id: "web",
    name: "Web & Digital",
    tagline: "Websites built to work, not just look.",
    description:
      "We design and develop websites that serve a clear purpose: attracting the right visitors and converting them into clients. Clean, fast and built for every screen.",
    items: [
      {
        name: "Business Websites",
        description:
          "Professional multi-page websites for companies, services and consultancies.",
        startingPrice: "₹7,999",
      },
      {
        name: "Portfolio Websites",
        description:
          "Showcase your work in a site designed around your creative output.",
        startingPrice: "₹4,999",
      },
      {
        name: "Landing Pages",
        description:
          "Single-purpose pages built to convert visitors for launches, campaigns and lead generation.",
        startingPrice: "₹3,499",
      },
      {
        name: "E-commerce Websites",
        description:
          "Online stores with product catalogues, secure checkout and inventory management.",
        startingPrice: "₹9,999",
      },
      {
        name: "Personal Websites",
        description:
          "Individual websites for professionals, freelancers and creators.",
        startingPrice: "₹2,999",
      },
    ],
    benefits: [
      "Mobile-first, responsive on all devices",
      "Fast loading and SEO-ready",
      "Built for future updates and growth",
      "Includes training and handover",
    ],
  },
  {
    id: "social",
    name: "Social Media & Content",
    tagline: "Content that earns attention.",
    description:
      "We design social media graphics that hold up at a scroll. Consistent, on-brand content built for Instagram, YouTube and beyond.",
    items: [
      {
        name: "Instagram Designs",
        description:
          "Posts, carousels and stories designed to your brand standards.",
        startingPrice: "₹149",
      },
      {
        name: "YouTube Thumbnails",
        description:
          "Eye-catching thumbnails that increase click-through rates on your videos.",
        startingPrice: "₹99",
      },
      {
        name: "Social Media Graphics",
        description:
          "Announcements, promotions and event graphics for all major platforms.",
        startingPrice: "₹249",
      },
      {
        name: "Reels Covers",
        description:
          "Consistent cover frames for your Instagram and YouTube Reels.",
        startingPrice: "₹149",
      },
      {
        name: "Banners",
        description:
          "Profile banners, cover images and digital advertising banners.",
        startingPrice: "₹399",
      },
    ],
    benefits: [
      "Consistent with your brand identity",
      "Optimised sizes for each platform",
      "Fast turnaround on individual pieces",
      "Editable templates available on request",
    ],
  },
  {
    id: "motion",
    name: "Creative & Motion",
    tagline: "Design that moves.",
    description:
      "Video and motion graphics that bring your brand to life. From short promotional reels to full motion identity packages.",
    items: [
      {
        name: "Video Reels",
        description:
          "Short-form promotional videos designed for Instagram, YouTube Shorts and other platforms.",
        startingPrice: "₹999",
      },
      {
        name: "Motion Graphics",
        description:
          "Animated graphics, text reveals and transitions for brand content and presentations.",
        startingPrice: "₹1,499",
      },
      {
        name: "Promotional Videos",
        description:
          "Full promotional videos for products, services and events.",
        startingPrice: "₹2,499",
      },
      {
        name: "Intro and Outro Videos",
        description:
          "Branded video intros and outros for YouTube and social media channels.",
        startingPrice: "₹999",
      },
    ],
    benefits: [
      "Increases engagement on social platforms",
      "Delivered in multiple formats and resolutions",
      "Consistent with your existing brand",
      "Revisions included",
    ],
  },
  {
    id: "print",
    name: "Print & Special Design",
    tagline: "Design that holds in your hands.",
    description:
      "Print-ready design for invitations, posters, brochures and all physical materials. Every piece designed to the same standard as your digital presence.",
    items: [
      {
        name: "Posters",
        description:
          "Event, promotional and decorative posters at any size, print-ready.",
        startingPrice: "₹499",
      },
      {
        name: "Film Posters",
        description:
          "Cinematic poster design for short films, features and film festivals.",
        startingPrice: "₹1,999",
      },
      {
        name: "Invitations",
        description:
          "Wedding invitations, event invites and special occasion stationery.",
        startingPrice: "₹499",
      },
      {
        name: "Brochures",
        description:
          "Single or multi-fold brochures for businesses, services and events.",
        startingPrice: "₹999",
      },
      {
        name: "Visiting Cards",
        description:
          "Business cards designed and laid out for professional print.",
        startingPrice: "₹299",
      },
      {
        name: "Certificates",
        description:
          "Award certificates, completion certificates and official documents.",
        startingPrice: "₹399",
      },
      {
        name: "Photo Editing",
        description:
          "Background removal, retouching, colour correction and composite edits.",
        startingPrice: "₹49",
      },
    ],
    benefits: [
      "Print-ready files at correct resolution",
      "CMYK colour profiles for accurate print reproduction",
      "Bleed and crop marks included",
      "Multiple format delivery",
    ],
  },
];
