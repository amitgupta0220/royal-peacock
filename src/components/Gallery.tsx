import { useMemo, useState } from "react";
import { site } from "../content/site";
import { Icon } from "./Icon";

type Tile = { title: string; tag: string };

function PlaceholderImage({ label }: { label: string }) {
  const svg = useMemo(() => {
    const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `data:image/svg+xml;utf8,` + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#0B1146"/>
            <stop offset="1" stop-color="#121D7E"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#g)"/>
        <circle cx="920" cy="190" r="240" fill="rgba(219,190,111,0.16)"/>
        <circle cx="320" cy="540" r="280" fill="rgba(255,255,255,0.06)"/>
        <text x="70" y="130" font-family="Inter, Arial, sans-serif" font-size="34" fill="rgba(255,255,255,0.92)">Royal Peacock Painting Co</text>
        <text x="70" y="190" font-family="Inter, Arial, sans-serif" font-size="20" fill="rgba(219,190,111,0.95)">${esc(label)}</text>
        <text x="70" y="740" font-family="Inter, Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.68)">Replace these with real before/after photos when ready.</text>
      </svg>`
    );
  }, [label]);

  return <img src={svg} alt={label} loading="lazy" />;
}

export function Gallery() {
  const tiles = site.gallery as Tile[];
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="sectionTitle">Our work</h2>
        <p className="sectionLead">
          Add your real project photos here. We will replace placeholders with your before/after gallery.
        </p>

        <div className="rpGalleryGrid">
          {tiles.map((t) => (
            <button key={t.title} className="rpTile card" onClick={() => setActive(t)}>
              <div className="rpTileMedia">
                <PlaceholderImage label={`${t.tag} | ${t.title}`} />
              </div>
              <div className="rpTileMeta">
                <div className="rpTileTag">{t.tag}</div>
                <div className="rpTileTitle">{t.title}</div>
              </div>
            </button>
          ))}
        </div>

        {active && (
          <div className="rpModalOverlay" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
            <div className="rpModal card" onClick={(e) => e.stopPropagation()}>
              <div className="rpModalTop">
                <div>
                  <div className="rpModalTag">{active.tag}</div>
                  <div className="rpModalTitle">{active.title}</div>
                </div>
                <button className="rpClose" onClick={() => setActive(null)} aria-label="Close">
                  <Icon name="close" size={22} />
                </button>
              </div>
              <div className="rpModalMedia">
                <PlaceholderImage label={`${active.tag} | ${active.title}`} />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .rpGalleryGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .rpTile{
          padding: 0;
          overflow:hidden;
          cursor:pointer;
          text-align:left;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(9, 12, 28, 0.55);
        }
        .rpTileMedia{ aspect-ratio: 4/3; overflow:hidden; }
        .rpTileMedia img{ width:100%; height:100%; object-fit: cover; transform: scale(1.02); transition: transform 180ms ease; }
        .rpTile:hover .rpTileMedia img{ transform: scale(1.06); }
        .rpTileMeta{ padding: 14px; }
        .rpTileTag{
          display:inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(219,190,111,0.28);
          background: rgba(219,190,111,0.10);
          color: rgba(255,255,255,0.88);
          font-weight: 900;
          font-size: 12px;
        }
        .rpTileTitle{ margin-top: 10px; font-weight: 950; }

        .rpModalOverlay{
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.70);
          display:flex;
          align-items:center;
          justify-content:center;
          padding: 16px;
          z-index: 60;
        }
        .rpModal{
          width: min(980px, 100%);
          padding: 14px;
        }
        .rpModalTop{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap: 12px;
          padding: 8px 8px 12px;
        }
        .rpModalTag{ color: rgba(219,190,111,0.95); font-weight: 950; }
        .rpModalTitle{ font-family: var(--font-heading); letter-spacing: 0.6px; margin-top: 4px; font-size: 22px; }
        .rpClose{
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.10);
          color: rgba(255,255,255,0.92);
          border-radius: 14px;
          padding: 10px 12px;
          cursor:pointer;
        }
        .rpClose:hover{ border-color: rgba(219,190,111,0.55); }
        .rpModalMedia{ overflow:hidden; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); }
        .rpModalMedia img{ width:100%; height:auto; display:block; }

        @media (max-width: 1000px){
          .rpGalleryGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
