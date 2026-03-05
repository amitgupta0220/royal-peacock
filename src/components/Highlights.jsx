import { motion } from "framer-motion";
import { FiShield, FiClock, FiThumbsUp } from "react-icons/fi";

const items = [
  {
    icon: FiThumbsUp,
    title: "Premium Finish",
    text: "Sharp lines, smooth coats, and a clean jobsite every time.",
    stat: "5-star care",
  },
  {
    icon: FiClock,
    title: "Fast, Reliable Scheduling",
    text: "Clear timelines and on-time arrival with proactive updates.",
    stat: "On-time crews",
  },
  {
    icon: FiShield,
    title: "Protected & Insured",
    text: "We protect floors, furniture, landscaping, and your peace of mind.",
    stat: "Fully insured",
  },
];

export default function Highlights() {
  return (
    <section className="section pt-10 sm:pt-12">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl bg-white/80 backdrop-blur border border-ink/5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] p-6 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)] hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gold-50 border border-gold-100 flex items-center justify-center">
                    <Icon className="text-ink" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-serif text-xl text-ink">{it.title}</h3>
                      <span className="text-xs font-sans px-2.5 py-1 rounded-full bg-ink/5 text-ink/70">
                        {it.stat}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-sans text-ink/65 leading-relaxed">{it.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
