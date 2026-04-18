import { motion } from "framer-motion";
import { site } from "../content/siteData";
import { asset } from "../lib/asset";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={asset("images/hero.jpg")}
          alt="Premium interior painting in Dallas Fort Worth"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
        {/* Soft wash to blend with the image like your mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-cloud/95 via-cloud/80 to-cloud/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-cloud/40 via-transparent to-cloud/70" />
      </div>

      <div className="container relative pt-14 sm:pt-20 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold text-ink/70 backdrop-blur"
            >
              <FiCheck className="text-gold-500" />
              Licensed and insured
              <span className="mx-1 text-ink/30">|</span>
              Fast estimates
              <span className="mx-1 text-ink/30">|</span>
              Clean finish
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-ink"
            >
              Premium Interior {"&"} Exterior Painting in DFW
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-ink/70 font-sans"
            >
              Clean prep. Sharp lines. A finish that lasts.
              <br className="hidden sm:block" />
              Serving {site.serviceAreaShort}.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#estimate"
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
              >
                Get Free Estimate <FiArrowRight className="ml-2" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink/80 shadow-soft hover:bg-white transition"
              >
                View Our Work
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex items-center gap-6 text-ink/50"
              aria-label="Trusted platforms"
            >
              {/* simple inline badges */}
              <div className="text-xs font-semibold tracking-wide">yelp</div>
              <div className="text-xs font-semibold tracking-wide">Google</div>
              <div className="text-xs font-semibold tracking-wide">Angi</div>
              <div className="text-xs font-semibold tracking-wide">BBB</div>
            </motion.div>
          </div>

          {/* Right side: subtle brand card like the mockup */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="ml-auto max-w-lg rounded-xl2 border border-white/40 bg-white/35 backdrop-blur p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" alt={site.name} className="h-16 w-auto" />
                  <div>
                    <div className="font-serif text-xl text-ink">{site.name}</div>
                    <div className="text-sm text-ink/60 font-sans">Premium painting in the Greater DFW Area</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl2 bg-white/60 border border-black/5 p-5">
                  <div className="font-serif text-2xl text-ink">Your home, elevated</div>
                  <p className="mt-2 text-sm text-ink/70 font-sans">
                    Premium prep and a smooth finish across interiors, exteriors, and trim.
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      { k: "2 coat", v: "systems" },
                      { k: "Clean", v: "lines" },
                      { k: "On time", v: "finish" },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="rounded-xl2 border border-black/5 bg-white/70 px-4 py-3 text-center shadow-soft"
                      >
                        <div className="text-base font-semibold text-ink">{x.k}</div>
                        <div className="text-xs text-ink/60 font-sans">{x.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-ink/80 shadow-soft hover:bg-white transition"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
