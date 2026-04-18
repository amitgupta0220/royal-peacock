import { site } from "../content/siteData";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-cloud">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt={site.name} className="h-16 w-auto" />
            <p className="mt-3 text-sm text-ink/60 font-sans">
              Premium interior and exterior painting across Dallas-Fort Worth and nearby areas.
            </p>
          </div>

          <div>
            <div className="font-serif text-lg text-ink">Contact</div>
            <div className="mt-3 text-sm text-ink/70 font-sans space-y-2">
              <div>
                <span className="font-semibold text-ink/80">Phone:</span>{" "}
                <a className="hover:underline" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </div>
              <div>
                <span className="font-semibold text-ink/80">Email:</span>{" "}
                <a className="hover:underline" href={`mailto:${site.emailInfo}`}>{site.emailInfo}</a>
              </div>
              <div>
                <span className="font-semibold text-ink/80">Estimates:</span>{" "}
                <a className="hover:underline" href={`mailto:${site.emailEstimate}`}>{site.emailEstimate}</a>
              </div>
            </div>
          </div>

          <div>
            <div className="font-serif text-lg text-ink">Service Areas</div>
            <div className="mt-3 text-sm text-ink/60 font-sans">
              Dallas · Fort Worth · Arlington · Plano · Irving · Frisco · Garland
            </div>
            <a
              href="#estimate"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 transition"
            >
              Get Free Estimate
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6 text-xs text-ink/50 font-sans flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Serving the Greater DFW Area.</div>
        </div>
      </div>
    </footer>
  );
}
