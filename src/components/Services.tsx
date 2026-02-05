import { site } from "../content/site";
import { Icon } from "./Icon";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="sectionTitle">Services</h2>
        <p className="sectionLead">
          A clean, detailed finish starts with prep and the right paint system. We keep the process simple and
          communicate clearly from estimate to final walkthrough.
        </p>

        <div className="grid3">
          {site.services.map((s) => (
            <div key={s.title} className="card rpService">
              <div className="rpServiceTop">
                <div className="rpServiceTitle">{s.title}</div>
              </div>
              <div className="rpServiceDesc">{s.description}</div>
              <ul className="rpServiceList">
                {s.bullets.map((b) => (
                  <li key={b} className="rpServiceBullet">
                    <span className="rpBulletIcon"><Icon name="check" /></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rpService{ padding: 18px; }
        .rpServiceTop{ display:flex; align-items:flex-start; justify-content:space-between; gap: 10px; }
        .rpServiceTitle{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          font-size: 20px;
          margin: 0;
        }
        .rpServiceDesc{ color: rgba(255,255,255,0.72); margin-top: 10px; line-height: 1.65; }
        .rpServiceList{ list-style:none; padding: 0; margin: 14px 0 0; display:flex; flex-direction:column; gap: 10px; }
        .rpServiceBullet{ display:flex; gap: 10px; align-items:flex-start; color: rgba(255,255,255,0.84); }
        .rpBulletIcon{
          width: 26px; height: 26px;
          display:inline-flex; align-items:center; justify-content:center;
          border-radius: 10px;
          border: 1px solid rgba(219,190,111,0.35);
          background: rgba(219,190,111,0.12);
          color: rgba(255,255,255,0.95);
          flex: 0 0 auto;
          margin-top: 1px;
        }
      `}</style>
    </section>
  );
}
