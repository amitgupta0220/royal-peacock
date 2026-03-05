import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function EstimateMarquee() {
  return (
    <section className="py-10 bg-stone overflow-hidden border-y border-black/5">
      <div className="container">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/5 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div className="font-serif text-2xl text-ink">Ready to transform your home?</div>
            <div className="mt-1 text-sm text-ink/60 font-sans">Get your FREE painting estimate today.</div>
          </div>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="#estimate"
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
          >
            Get Free Estimate <FiArrowRight className="ml-2" />
          </motion.a>
        </div>
      </div>

      {/* subtle moving divider like a slider section */}
      <div className="mt-8 whitespace-nowrap opacity-60 select-none">
        <div className="inline-flex animate-[marquee_18s_linear_infinite] gap-10 px-5 text-xs tracking-[0.22em] text-ink/50 font-sans">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i}>FREE ESTIMATE · PREMIUM PREP · CLEAN FINISH ·</span>
          ))}
        </div>
      </div>

      <style>
        {`@keyframes marquee { 0% { transform: translateX(0);} 100% { transform: translateX(-50%);} }`}
      </style>
    </section>
  );
}
