import { motion } from "framer-motion";
import { site } from "../content/siteData";
import { FiPhoneCall } from "react-icons/fi";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cloud/80 backdrop-blur border-b border-black/5">
      <div className="container h-20 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo-dark.svg" alt={site.name} className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-ink/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-soft hover:shadow-lift transition"
          >
            <FiPhoneCall className="opacity-80" />
            Call
          </a>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#estimate"
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
          >
            Get Free Estimate
          </motion.a>
        </div>
      </div>
    </header>
  );
}
