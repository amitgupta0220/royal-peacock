import { site } from "../content/siteData";
import { motion } from "framer-motion";

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`${count} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-gold-500" : "text-black/10"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-cloud">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Customer Reviews</h2>
            <p className="mt-2 text-ink/60 font-sans">
              What our clients say about working with Royal Peacock Painting Co.
            </p>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-3 gap-5">
            {site.reviews.map((r, idx) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="rounded-xl2 border border-black/5 bg-white p-6 shadow-soft"
              >
                <Stars count={r.rating} />
                <p className="mt-4 text-sm text-ink/70 font-sans leading-relaxed">
                  “{r.quote}”
                </p>
                <div className="mt-4 text-sm font-semibold text-ink">{r.name}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
