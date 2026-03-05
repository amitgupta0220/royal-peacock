import React from "react";
import { site } from "../content/siteData";

/**
 * Local SEO schema for DFW searches.
 * Add address/geo later for even stronger local ranking.
 */
export default function SeoSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "name": site.name,
    "url": "https://amitgupta0220.github.io/royal-peacock/",
    "telephone": site.phoneTel,
    "areaServed": site.cities.map((c) => ({ "@type": "City", "name": c })),
    "email": site.emailInfo,
    "sameAs": [],
    "description": "Premium interior and exterior painting in Dallas-Fort Worth (DFW).",
    "serviceType": ["Interior Painting", "Exterior Painting", "Cabinet Refinishing"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
