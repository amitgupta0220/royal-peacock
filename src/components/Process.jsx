import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const steps = [
  { title: "Free Estimate", desc: "Quick scheduling and a clear scope with transparent pricing." },
  { title: "Prep & Protect", desc: "Floors covered, surfaces prepped, edges taped for crisp lines." },
  { title: "Professional Paint", desc: "High-quality coatings applied with the right system for the surface." },
  { title: "Final Walkthrough", desc: "We inspect together, handle touch-ups, and leave the space clean." },
];

export default function Process() {
  return (
    <section id="process" className="section bg-cloud">
      <div className="container">
        <h2 className="font-serif text-3xl sm:text-4xl text-ink">Our Proven Process</h2>
        <p className="mt-2 text-ink/60 font-sans max-w-2xl">
          We keep it simple and consistent so you always know what to expect.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl2 border border-black/5 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-2 text-gold-600">
                <FiCheckCircle />
                <div className="text-sm font-semibold text-ink/70">Step {idx + 1}</div>
              </div>
              <div className="mt-3 font-serif text-xl text-ink">{s.title}</div>
              <div className="mt-2 text-sm text-ink/60 font-sans">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
