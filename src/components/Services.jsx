import { motion } from "framer-motion";
import { site } from "../content/siteData";
import { asset } from "../lib/asset";
import { FiChevronRight } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="section bg-cloud">
      <div className="container">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Our Services</h2>
            <p className="mt-2 text-ink/60 font-sans max-w-2xl">
              A smooth, durable finish starts with careful prep. We protect your space, keep lines sharp, and leave the jobsite clean.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.services.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-xl2 bg-white shadow-soft border border-black/5 hover:shadow-lift transition"
            >
              <div className="relative h-44">
                <img
                  src={asset(s.image)}
                  alt={`${s.title} in Dallas Fort Worth`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                  <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition">
                    <FiChevronRight />
                  </span>
                </div>

                <p className="mt-2 text-sm text-ink/60 font-sans">{s.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-ink/70 font-sans">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#estimate"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-gold-100 text-ink/80 px-4 py-2 text-sm font-semibold hover:bg-gold-200 transition"
                >
                  Learn More <FiChevronRight className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#process"
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
          >
            Learn More About Our Process <FiChevronRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
