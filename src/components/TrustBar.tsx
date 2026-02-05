type Item = { title: string; desc: string };

export function TrustBar({ items }: { items: Item[] }) {
  return (
    <section className="section" style={{ paddingTop: "0" }}>
      <div className="container">
        <div className="rpTrust card">
          {items.map((it) => (
            <div key={it.title} className="rpTrustItem">
              <div className="rpTrustTitle">{it.title}</div>
              <div className="rpTrustDesc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rpTrust{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          padding: 18px;
        }
        .rpTrustItem{
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 16px;
        }
        .rpTrustTitle{ font-weight: 950; }
        .rpTrustDesc{ color: rgba(255,255,255,0.72); margin-top: 8px; line-height: 1.65; }

        @media (max-width: 900px){
          .rpTrust{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
