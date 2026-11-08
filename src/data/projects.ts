export type ProjectCategory =
  | "Branding"
  | "Web Design"
  | "Social Media"
  | "Posters"
  | "Motion"
  | "Print Design";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  year: number;
  featured: boolean;
  isSample: true; // Always true — real projects pending
  placeholderColor: string;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "forma-brand-identity",
    title: "Forma Brand Identity",
    category: "Branding",
    description:
      "Complete brand identity system for a concept architecture studio. Logo, type, colour palette and guidelines.",
    longDescription:
      "A concept brand identity project exploring minimal identity design for an architecture and interior studio. Includes primary logo, wordmark, monogram, full colour system, typography selection and a 12-page brand guidelines document.",
    tags: ["Logo Design", "Brand Identity", "Brand Guidelines", "Typography"],
    year: 2024,
    featured: true,
    isSample: true,
    placeholderColor: "#F5F5F5",
  },
  {
    id: "02",
    slug: "atlas-portfolio-website",
    title: "Atlas Portfolio Website",
    category: "Web Design",
    description:
      "Minimal portfolio website concept for a photographer. Single-page scrolling layout with full-bleed image galleries.",
    longDescription:
      "A concept website design for a documentary photographer's portfolio. Features a fixed navigation, full-screen hero, project gallery with category filters, and contact form. Designed mobile-first with performance in mind.",
    tags: ["Web Design", "Portfolio", "Photography", "UI/UX"],
    year: 2024,
    featured: true,
    isSample: true,
    placeholderColor: "#0A0A0A",
  },
  {
    id: "03",
    slug: "grove-social-media-kit",
    title: "Grove Social Media Kit",
    category: "Social Media",
    description:
      "Instagram and YouTube template kit concept for a plant and lifestyle brand. 20 customisable post designs.",
    longDescription:
      "A concept social media design kit for a plant lifestyle brand. Includes 20 Instagram post templates, 6 story templates, YouTube thumbnail templates and cover images. All designed around a warm, nature-inspired colour palette.",
    tags: ["Instagram", "Social Media", "Templates", "Brand Design"],
    year: 2024,
    featured: false,
    isSample: true,
    placeholderColor: "#E5E5E5",
  },
  {
    id: "04",
    slug: "noir-film-poster",
    title: "Noir Short Film Poster",
    category: "Posters",
    description:
      "Film poster concept for a noir-genre short film. High-contrast monochrome composition with editorial typography.",
    longDescription:
      "A concept film poster for a short noir film exploring themes of memory and isolation. The design uses high-contrast black and white photography, editorial typefaces and minimal layout to communicate the film's tone before the first frame is seen.",
    tags: ["Film Poster", "Poster Design", "Typography", "Print"],
    year: 2024,
    featured: true,
    isSample: true,
    placeholderColor: "#1A1A1A",
  },
  {
    id: "05",
    slug: "pulse-motion-identity",
    title: "Pulse Motion Identity",
    category: "Motion",
    description:
      "Animated logo and motion identity concept for a podcast and media brand. Intro, outro and transition sequences.",
    longDescription:
      "A concept motion identity for a podcast network. Includes animated logo reveal, channel intro and outro sequences, lower thirds for guest interviews and animated social media templates. Designed for consistency across YouTube and streaming platforms.",
    tags: ["Motion Graphics", "Logo Animation", "Intro/Outro", "Video"],
    year: 2024,
    featured: false,
    isSample: true,
    placeholderColor: "#4A4A4A",
  },
  {
    id: "06",
    slug: "bloom-wedding-stationery",
    title: "Bloom Wedding Stationery",
    category: "Print Design",
    description:
      "Full wedding stationery suite concept: invitation, RSVP, menu card and place cards with botanical illustration.",
    longDescription:
      "A concept wedding stationery suite for a garden-themed ceremony. Includes save-the-date, main invitation, RSVP card, menu card, place cards and envelope lining design. Features custom botanical line illustration and a soft, elegant type pairing.",
    tags: ["Wedding Invitation", "Print Design", "Stationery", "Illustration"],
    year: 2024,
    featured: false,
    isSample: true,
    placeholderColor: "#9A9A9A",
  },
  {
    id: "07",
    slug: "vertex-brand-system",
    title: "Vertex Brand System",
    category: "Branding",
    description:
      "Full brand system concept for a tech consultancy. Identity, website design, presentation templates and digital assets.",
    longDescription:
      "A concept brand system for a technology consultancy. Covers primary identity (logo, marks and icons), colour and type systems, website design (homepage through contact), pitch deck template, email signature and digital marketing assets.",
    tags: ["Branding", "Web Design", "Tech", "Identity System"],
    year: 2024,
    featured: true,
    isSample: true,
    placeholderColor: "#0A0A0A",
  },
  {
    id: "08",
    slug: "street-food-menu-design",
    title: "Street Food Menu Design",
    category: "Print Design",
    description:
      "Bold and practical menu design concept for a South Indian street food stall. Single-sheet print-ready format.",
    longDescription:
      "A concept menu design for a South Indian street food vendor. Single A3 sheet, double-sided, print-ready. Uses bold display typography, high-contrast colours and a grid layout that communicates the full menu clearly, even in a busy street setting.",
    tags: ["Menu Design", "Print Design", "Food", "Typography"],
    year: 2024,
    featured: false,
    isSample: true,
    placeholderColor: "#F5F5F5",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(
  currentSlug: string
): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const projectCategories: ProjectCategory[] = [
  "Branding",
  "Web Design",
  "Social Media",
  "Posters",
  "Motion",
  "Print Design",
];

