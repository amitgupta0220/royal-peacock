import { site } from "../content/site";
import mark from "../assets/royal-peacock-mark.png";
import { Icon } from "./Icon";
import { scrollToId } from "./utils";

export function Hero() {
  return (
    <section id="top" className="section">
      <div className="container grid2">
        <div>
          <span className="pill">
            <Icon name="spark" /> {site.hero.pill}
          </span>

          <h1 className="rpHeroTitle">{site.hero.headline}</h1>
          <p className="rpHeroLead">{site.hero.subhead}</p>

          <div className="rpHeroCtas">
            <button className="btn btnPrimary" onClick={() => scrollToId("contact")}>
              {site.brand.primaryCta} <Icon name="arrow" />
            </button>
            <button className="btn" onClick={() => scrollToId("gallery")}>
              {site.brand.secondaryCta}
            </button>
          </div>

          <div className="rpHeroMini">
            <div className="rpMiniCard card">
              <div className="rpMiniTitle">Fast, clear quote</div>
              <div className="rpMiniText">Transparent pricing and a simple timeline.</div>
            </div>
            <div className="rpMiniCard card">
              <div className="rpMiniTitle">Clean jobsite</div>
              <div className="rpMiniText">Protected floors, sharp lines, and cleanup.</div>
            </div>
          </div>
        </div>

        <div className="rpHeroRight">
          <div className="rpHeroBadge card">
            <img src={mark} alt="Royal Peacock mark" className="rpMark" />
            <div className="rpBadgeText">
              <div className="rpBadgeTitle">{site.brand.name}</div>
              <div className="rpBadgeSub">{site.brand.tagline}</div>
            </div>
          </div>

          <div className="rpHeroImage card">
            <div className="rpHeroImageInner">
              <div className="rpHeroImageTitle">Your home, elevated</div>
              <div className="rpHeroImageDesc">
                Premium prep and a smooth finish across interiors, exteriors, and trim.
              </div>

              <div className="rpHeroStats">
                <div className="rpStat">
                  <div className="rpStatTop">2 coat</div>
                  <div className="rpStatBottom">systems</div>
                </div>
                <div className="rpStat">
                  <div className="rpStatTop">Clean</div>
                  <div className="rpStatBottom">lines</div>
                </div>
                <div className="rpStat">
                  <div className="rpStatTop">On time</div>
                  <div className="rpStatBottom">finish</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rpHeroCallout">
            <a className="rpCalloutLink" href={site.contact.phoneHref}>
              <Icon name="phone" /> {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .rpHeroTitle{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          font-size: clamp(38px, 4.4vw, 58px);
          line-height: 1.05;
          margin: 16px 0 12px;
        }
        .rpHeroLead{
          color: var(--rp-muted);
          font-size: 16px;
          line-height: 1.75;
          max-width: 64ch;
          margin: 0 0 20px;
        }
        .rpHeroCtas{ display:flex; gap: 10px; flex-wrap: wrap; }

        .rpHeroMini{
          margin-top: 22px;
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .rpMiniCard{ padding: 16px; }
        .rpMiniTitle{ font-weight: 900; margin-bottom: 6px; }
        .rpMiniText{ color: rgba(255,255,255,0.74); line-height: 1.6; }

        .rpHeroRight{ display:flex; flex-direction:column; gap: 14px; }
        .rpHeroBadge{ display:flex; align-items:center; gap: 14px; padding: 14px; }
        .rpMark{ width: 52px; height: 52px; object-fit: contain; }
        .rpBadgeTitle{ font-family: var(--font-heading); letter-spacing: 0.6px; font-size: 18px; }
        .rpBadgeSub{ color: rgba(255,255,255,0.72); margin-top: 2px; }

        .rpHeroImage{ overflow:hidden; }
        .rpHeroImageInner{
          padding: 22px;
          background:
            radial-gradient(700px 280px at 30% 20%, rgba(219,190,111,0.18), transparent 65%),
            radial-gradient(700px 280px at 90% 10%, rgba(18,29,126,0.62), transparent 60%),
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          min-height: 280px;
        }
        .rpHeroImageTitle{ font-family: var(--font-heading); letter-spacing: 0.6px; font-size: 22px; margin-bottom: 6px; }
        .rpHeroImageDesc{ color: rgba(255,255,255,0.72); line-height: 1.65; max-width: 52ch; }

        .rpHeroStats{ display:flex; gap: 10px; margin-top: 16px; flex-wrap: wrap; }
        .rpStat{
          flex: 1;
          min-width: 120px;
          border: 1px solid rgba(219,190,111,0.28);
          background: rgba(11,17,70,0.35);
          border-radius: 16px;
          padding: 12px;
        }
        .rpStatTop{ font-weight: 900; }
        .rpStatBottom{ color: rgba(255,255,255,0.7); margin-top: 2px; }

        .rpHeroCallout{ display:flex; justify-content:flex-end; }
        .rpCalloutLink{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid rgba(219,190,111,0.35);
          background: rgba(219,190,111,0.12);
          font-weight: 900;
        }

        @media (max-width: 900px){
          .rpHeroMini{ grid-template-columns: 1fr; }
          .rpHeroCallout{ justify-content:flex-start; }
        }
      `}</style>
    </section>
  );
}
