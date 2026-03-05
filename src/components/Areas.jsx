import { site } from "../content/siteData";
import { motion } from "framer-motion";

export default function Areas() {
  return (
    <section id="areas" className="section bg-stone">
      <div className="container text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-ink">Areas We Serve</h2>
        <p className="mt-2 text-ink/60 font-sans">
          Proudly serving the Greater DFW Area.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {site.cities.map((c, idx) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.015, 0.25) }}
              className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink/75 shadow-soft border border-black/5"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
