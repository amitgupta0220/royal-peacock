import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { asset } from "../lib/asset";

const items = [
  { title: "Interior Projects", image: asset("images/work-1.jpg") },
  { title: "Exterior Projects", image: asset("images/work-2.jpg") },
  { title: "Trim & Cabinets", image: asset("images/work-3.jpg") },
];

export default function Work() {
  const scroller = useRef(null);

  const scrollBy = (dx) => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: dx, behavior: "smooth" });
  };

  const cards = useMemo(() => items, []);

  return (
    <section id="work" className="section bg-stone">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">How It Works</h2>
            <p className="mt-2 text-ink/60 font-sans">
              A smooth experience from estimate to final walkthrough. Browse a few project highlights below.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-420)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-soft hover:bg-cloud transition"
              aria-label="Scroll left"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scrollBy(420)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-soft hover:bg-cloud transition"
              aria-label="Scroll right"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="mt-8 flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
        >
          {cards.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start overflow-hidden rounded-xl2 bg-white shadow-soft border border-black/5"
            >
              <div className="relative h-48">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm font-semibold text-ink shadow-soft">
                    {c.title}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#estimate"
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
          >
            View More Work
          </a>
        </div>
      </div>
    </section>
  );
}
