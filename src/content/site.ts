export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const site = {
  brand: {
    name: "Royal Peacock Painting Co",
    tagline: "Premium interior and exterior painting in DFW",
    primaryCta: "Get a free estimate",
    secondaryCta: "View our work"
  },
  contact: {
    phoneDisplay: "(682) 376-1817",
    phoneHref: "tel:+16823761817",
    email: "hello@royalpeacockpainting.com",
    addressLines: ["DFW Metroplex", "Irving, Texas 75039"]
  },
  hero: {
    pill: "Licensed and insured | Fast estimates | Clean finish",
    headline: "A premium paint finish that feels like a renovation.",
    subhead:
      "From crisp interiors to durable exteriors, we deliver a clean, detailed finish with a smooth process and honest communication."
  },
  trust: [
    { title: "Detail-first prep", desc: "Clean lines, protected floors, and careful surface prep for long-lasting results." },
    { title: "Clear timelines", desc: "A simple schedule you can trust, with daily updates when we are onsite." },
    { title: "Premium materials", desc: "We match the right paint system to your project, budget, and finish goals." }
  ],
  services: [
    {
      title: "Interior painting",
      description: "Walls, ceilings, trim, doors, and clean cut lines with a consistent finish.",
      bullets: ["Bedrooms and living spaces", "Trim and baseboards", "Drywall touch-ups"]
    },
    {
      title: "Exterior painting",
      description: "Weather-ready prep, durable coatings, and a clean look that boosts curb appeal.",
      bullets: ["Siding and brick", "Fascia and soffit", "Power wash and scraping"]
    },
    {
      title: "Cabinets and trim",
      description: "Smooth, factory-like cabinet finishes with careful masking and curing time.",
      bullets: ["Kitchen cabinets", "Vanities", "Doors and trim"]
    }
  ] satisfies Service[],
  process: [
    { step: "01", title: "Free estimate", desc: "We review scope, surfaces, and finish goals. You get a clear quote." },
    { step: "02", title: "Prep and protection", desc: "We protect floors and furniture, patch surfaces, and set clean lines." },
    { step: "03", title: "Paint and detail", desc: "Two-coat systems, consistent coverage, and crisp edging." },
    { step: "04", title: "Walkthrough", desc: "Final review, touch-ups, and cleanup. You are happy before we leave." }
  ],
  gallery: [
    { title: "Modern living room refresh", tag: "Interior" },
    { title: "Exterior curb appeal upgrade", tag: "Exterior" },
    { title: "Clean white trim finish", tag: "Detail" },
    { title: "Bedroom repaint and patch", tag: "Interior" },
    { title: "Cabinet repaint smooth finish", tag: "Cabinets" },
    { title: "Fence stain and protection", tag: "Exterior" }
  ],
  reviews: {
    ratingText: "5.0 average rating",
    note:
      "We can embed your Google reviews here once your Google Business Profile is connected."
  },
  areas: [
    "Irving",
    "Las Colinas",
    "Dallas",
    "Fort Worth",
    "Arlington",
    "Plano",
    "Frisco",
    "Grapevine"
  ]
};
