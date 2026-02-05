import { site } from "../content/site";
import { Icon } from "./Icon";

export function Areas() {
  return (
    <section id="areas" className="section">
      <div className="container">
        <h2 className="sectionTitle">Areas we serve</h2>
        <p className="sectionLead">
          DFW Metroplex and nearby neighborhoods. If you do not see your city, contact us and we will confirm.
        </p>

        <div className="card rpAreas">
          {site.areas.map((a) => (
            <div key={a} className="rpArea">
              <span className="rpAreaIcon"><Icon name="pin" /></span>
              <span className="rpAreaText">{a}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rpAreas{
          padding: 18px;
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .rpArea{
          display:flex;
          align-items:center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 12px 12px;
        }
        .rpAreaIcon{
          width: 28px; height: 28px;
          display:inline-flex; align-items:center; justify-content:center;
          border-radius: 12px;
          border: 1px solid rgba(219,190,111,0.28);
          background: rgba(219,190,111,0.10);
        }
        .rpAreaText{ font-weight: 900; }

        @media (max-width: 1000px){
          .rpAreas{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
