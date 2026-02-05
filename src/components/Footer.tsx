import { site } from "../content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="rpFooter">
      <div className="container rpFooterInner">
        <div className="rpFooterBrand">
          <div className="rpFooterName">{site.brand.name}</div>
          <div className="rpFooterTag">{site.brand.tagline}</div>
        </div>

        <div className="rpFooterLinks">
          <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </div>

        <div className="rpFooterCopy">© {year} {site.brand.name}. All rights reserved.</div>
      </div>

      <style>{`
        .rpFooter{
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.30);
          padding: 26px 0;
        }
        .rpFooterInner{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .rpFooterName{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          font-size: 18px;
        }
        .rpFooterTag{ color: rgba(255,255,255,0.72); margin-top: 6px; }
        .rpFooterLinks{ display:flex; flex-direction:column; gap: 6px; }
        .rpFooterLinks a{ color: rgba(255,255,255,0.78); font-weight: 800; }
        .rpFooterLinks a:hover{ color: rgba(219,190,111,0.95); }
        .rpFooterCopy{ color: rgba(255,255,255,0.58); }
      `}</style>
    </footer>
  );
}
