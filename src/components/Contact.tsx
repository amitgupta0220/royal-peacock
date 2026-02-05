import { useMemo, useState } from "react";
import { site } from "../content/site";
import { Icon } from "./Icon";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const services = [
  "Interior painting",
  "Exterior painting",
  "Cabinets and trim",
  "Commercial",
  "Not sure yet"
];

export function Contact() {
  const [state, setState] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: services[0],
    message: ""
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Estimate request - ${state.service}`);
    const body = encodeURIComponent(
      `Name: ${state.name}
Phone: ${state.phone}
Email: ${state.email}
Service: ${state.service}

Project details:
${state.message}
`
    );
    return `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  }, [state]);

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid2">
          <div>
            <h2 className="sectionTitle">Free estimate</h2>
            <p className="sectionLead">
              Tell us what you need. We will reply quickly with next steps and scheduling options.
            </p>

            <div className="rpContactCards">
              <a className="card rpContactCard" href={site.contact.phoneHref}>
                <div className="rpContactIcon"><Icon name="phone" size={20} /></div>
                <div>
                  <div className="rpContactTitle">Call</div>
                  <div className="rpContactText">{site.contact.phoneDisplay}</div>
                </div>
              </a>

              <a className="card rpContactCard" href={`mailto:${site.contact.email}`}>
                <div className="rpContactIcon"><Icon name="mail" size={20} /></div>
                <div>
                  <div className="rpContactTitle">Email</div>
                  <div className="rpContactText">{site.contact.email}</div>
                </div>
              </a>

              <div className="card rpContactCard">
                <div className="rpContactIcon"><Icon name="pin" size={20} /></div>
                <div>
                  <div className="rpContactTitle">Location</div>
                  <div className="rpContactText">{site.contact.addressLines.join(" | ")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card rpForm">
            <div className="rpFormTitle">Request a quote</div>

            <div className="rpFormGrid">
              <label className="rpField">
                <span>Name</span>
                <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} placeholder="Your name" />
              </label>

              <label className="rpField">
                <span>Phone</span>
                <input value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} placeholder="(###) ###-####" />
              </label>

              <label className="rpField">
                <span>Email</span>
                <input value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} placeholder="you@email.com" />
              </label>

              <label className="rpField">
                <span>Service</span>
                <select value={state.service} onChange={(e) => setState({ ...state, service: e.target.value })}>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="rpField rpFieldFull">
                <span>Project details</span>
                <textarea
                  value={state.message}
                  onChange={(e) => setState({ ...state, message: e.target.value })}
                  placeholder="Rooms, surfaces, timeline, or any details you can share."
                  rows={5}
                />
              </label>

              <div className="rpFieldFull rpFormActions">
                <a className="btn btnPrimary" href={mailto}>
                  Send request <Icon name="arrow" />
                </a>
                <div className="rpFormNote">
                  This button opens your email client with a pre-filled message. When you are ready, we can connect a real form endpoint.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .rpContactCards{
          display:grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .rpContactCard{
          display:flex;
          gap: 12px;
          align-items:center;
          padding: 16px;
        }
        .rpContactIcon{
          width: 44px;
          height: 44px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 16px;
          border: 1px solid rgba(219,190,111,0.35);
          background: rgba(219,190,111,0.12);
        }
        .rpContactTitle{ font-weight: 950; }
        .rpContactText{ color: rgba(255,255,255,0.74); margin-top: 4px; line-height: 1.6; }

        .rpForm{ padding: 18px; }
        .rpFormTitle{
          font-family: var(--font-heading);
          letter-spacing: 0.6px;
          font-size: 22px;
          margin-bottom: 12px;
        }
        .rpFormGrid{
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .rpField{ display:flex; flex-direction:column; gap: 8px; }
        .rpField span{ font-weight: 900; font-size: 13px; color: rgba(255,255,255,0.84); }
        .rpField input,
        .rpField select,
        .rpField textarea{
          width:100%;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          padding: 12px 12px;
          color: rgba(255,255,255,0.92);
          outline: none;
        }
        .rpField input:focus,
        .rpField select:focus,
        .rpField textarea:focus{
          border-color: rgba(219,190,111,0.55);
          background: rgba(255,255,255,0.08);
        }
        .rpFieldFull{ grid-column: 1 / -1; }
        .rpFormActions{ display:flex; flex-direction:column; gap: 10px; align-items:flex-start; }
        .rpFormNote{ color: rgba(255,255,255,0.66); line-height: 1.6; font-size: 13px; }

        @media (max-width: 900px){
          .rpFormGrid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
