import { site } from "../content/site";

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <h2 className="sectionTitle">A smooth process</h2>
        <p className="sectionLead">
          We keep things simple: clear scope, careful prep, consistent paint, and a final walkthrough.
        </p>

        <div className="rpProcessGrid">
          {site.process.map((p) => (
            <div key={p.step} className="card rpStep">
              <div className="rpStepNum">{p.step}</div>
              <div className="rpStepTitle">{p.title}</div>
              <div className="rpStepDesc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rpProcessGrid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .rpStep{ padding: 18px; }
        .rpStepNum{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          color: var(--rp-gold);
          font-size: 18px;
        }
        .rpStepTitle{
          font-weight: 950;
          margin-top: 10px;
        }
        .rpStepDesc{
          color: rgba(255,255,255,0.72);
          margin-top: 8px;
          line-height: 1.65;
        }

        @media (max-width: 1000px){
          .rpProcessGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
