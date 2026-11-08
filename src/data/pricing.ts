export interface PriceItem {
  name: string;
  range: string;
  unit?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  includes: string[];
  highlight?: boolean;
}

export const individualPrices: PriceItem[] = [
  { name: "Logo Design", range: "₹999 – ₹4,999" },
  { name: "Visiting Card", range: "₹299 – ₹799" },
  { name: "Instagram Post", range: "₹149 – ₹499" },
  { name: "YouTube Thumbnail", range: "₹99 – ₹399" },
  { name: "Poster Design", range: "₹499 – ₹1,999" },
  { name: "Film Poster", range: "₹1,999 – ₹7,999" },
  { name: "Wedding Invitation", range: "₹499 – ₹2,999" },
  { name: "Video Reel", range: "₹999 – ₹4,999" },
  { name: "Passport Photo Edit", range: "₹49 – ₹149" },
  { name: "Basic Website", range: "₹4,999 – ₹14,999" },
  { name: "E-commerce Website", range: "₹9,999 – ₹29,999" },
  { name: "Brand Identity Kit", range: "₹4,999 – ₹14,999" },
  { name: "Social Media Package", range: "₹2,999 – ₹9,999", unit: "/month" },
  { name: "Resume Design", range: "₹299 – ₹999" },
  { name: "Background Removal", range: "₹29 – ₹99", unit: "/image" },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹2,999",
    includes: [
      "Logo design",
      "Visiting card design",
      "5 × Instagram post designs",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "₹7,999",
    includes: [
      "Logo design",
      "Brand identity kit",
      "Visiting card design",
      "Basic website (up to 5 pages)",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹14,999",
    includes: [
      "Logo design",
      "Brand identity kit",
      "Website (up to 8 pages)",
      "10 × social media post designs",
      "Visiting card design",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "₹24,999",
    includes: [
      "Everything in the Premium package",
      "Video reel (1 promotional video)",
      "Monthly social media management",
      "Priority support",
    ],
  },
];

export const pricingNote =
  "Prices are indicative ranges, subject to project scope and final quotation.";
