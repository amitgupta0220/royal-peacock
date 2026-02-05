import { useEffect, useMemo, useState } from "react";
import { site } from "../content/site";
import { clsx, scrollToId } from "./utils";
import { Icon } from "./Icon";
import lockup from "../assets/royal-peacock-lockup.png";

type NavItem = { id: string; label: string };

type Props = {
  nav: NavItem[];
};

export function Header({ nav }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = useMemo(() => nav, [nav]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className={clsx("rpHeader", scrolled && "rpHeaderScrolled")}>
      <div className="container rpHeaderInner">
        <a href="#top" className="rpBrand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img src={lockup} alt={site.brand.name} className="rpLogo" />
          <span className="srOnly">{site.brand.name}</span>
        </a>

        <nav className="rpNav">
          {items.map((it) => (
            <button key={it.id} className="rpNavLink" onClick={() => go(it.id)}>
              {it.label}
            </button>
          ))}
        </nav>

        <div className="rpHeaderCtas">
          <a className="btn" href={site.contact.phoneHref}>
            <Icon name="phone" /> Call
          </a>
          <button className="btn btnPrimary" onClick={() => go("contact")}>
            {site.brand.primaryCta} <Icon name="arrow" />
          </button>
          <button className="rpMenuBtn" onClick={() => setOpen(true)} aria-label="Open menu">
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="rpMobileOverlay" role="dialog" aria-modal="true">
          <div className="rpMobilePanel card">
            <div className="rpMobileTop">
              <div className="rpMobileTitle">{site.brand.name}</div>
              <button className="rpIconBtn" onClick={() => setOpen(false)} aria-label="Close menu">
                <Icon name="close" size={22} />
              </button>
            </div>

            <div className="rpMobileNav">
              {items.map((it) => (
                <button key={it.id} className="rpMobileLink" onClick={() => go(it.id)}>
                  {it.label}
                </button>
              ))}
            </div>

            <div className="rpMobileActions">
              <a className="btn" href={site.contact.phoneHref}>
                <Icon name="phone" /> {site.contact.phoneDisplay}
              </a>
              <button className="btn btnPrimary" onClick={() => go("contact")}>
                {site.brand.primaryCta}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .srOnly{ position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); border:0; }

        .rpHeader{
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(7, 11, 24, 0.45);
          backdrop-filter: blur(10px);
        }
        .rpHeaderScrolled{
          background: rgba(6, 9, 20, 0.66);
        }
        .rpHeaderInner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 16px;
          padding: 14px 0;
        }
        .rpBrand{ display:flex; align-items:center; gap: 12px; }
        .rpLogo{ height: 34px; width:auto; filter: drop-shadow(0 10px 16px rgba(0,0,0,0.25)); }

        .rpNav{ display:flex; gap: 8px; }
        .rpNavLink{
          background: transparent;
          border: 0;
          color: rgba(255,255,255,0.82);
          padding: 10px 10px;
          border-radius: 12px;
          cursor:pointer;
          font-weight: 700;
        }
        .rpNavLink:hover{ background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.95); }

        .rpHeaderCtas{ display:flex; align-items:center; gap: 10px; }
        .rpMenuBtn{
          display:none;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 10px 12px;
          cursor:pointer;
          color: rgba(255,255,255,0.92);
        }
        .rpMenuBtn:hover{ border-color: rgba(219,190,111,0.55); }

        .rpMobileOverlay{
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.62);
          display:flex;
          align-items:flex-start;
          justify-content:center;
          padding: 16px;
        }
        .rpMobilePanel{
          width: min(560px, 100%);
          padding: 18px;
          margin-top: 70px;
        }
        .rpMobileTop{ display:flex; align-items:center; justify-content:space-between; gap: 12px; margin-bottom: 8px; }
        .rpMobileTitle{ font-family: var(--font-heading); letter-spacing: 0.6px; font-size: 18px; }
        .rpIconBtn{ background: transparent; border:0; color: rgba(255,255,255,0.9); cursor:pointer; padding: 10px; border-radius: 12px; }
        .rpIconBtn:hover{ background: rgba(255,255,255,0.08); }

        .rpMobileNav{ display:flex; flex-direction:column; gap: 6px; padding: 10px 0 14px; }
        .rpMobileLink{
          text-align:left;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 14px;
          color: rgba(255,255,255,0.9);
          font-weight: 800;
          cursor:pointer;
        }
        .rpMobileLink:hover{ border-color: rgba(219,190,111,0.55); background: rgba(255,255,255,0.08); }

        .rpMobileActions{ display:flex; gap: 10px; flex-direction:column; }

        @media (max-width: 980px){
          .rpNav{ display:none; }
          .rpMenuBtn{ display:inline-flex; align-items:center; justify-content:center; }
        }
      `}</style>
    </header>
  );
}
