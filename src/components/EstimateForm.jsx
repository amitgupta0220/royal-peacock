import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { site } from "../content/siteData";
import { asset } from "../lib/asset";

function buildMailto({ name, phone, email, projectType, message }) {
  const subject = encodeURIComponent(`Free Estimate Request - ${projectType}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProject Type: ${projectType}\n\nDetails:\n${message}`
  );
  return `mailto:${site.emailEstimate}?subject=${subject}&body=${body}`;
}

export default function EstimateForm() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Interior Painting",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.phone.trim() && form.email.trim();
  }, [form]);

  const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "" });

    // If you set VITE_FORM_ENDPOINT, we'll POST JSON for a real submission.
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, source: "royalpeacockpainting.com" }),
        });

        if (!res.ok) throw new Error("Request failed");
        setStatus({ type: "success", msg: "Request sent. We'll reach out shortly." });
        setForm({ name: "", phone: "", email: "", projectType: "Interior Painting", message: "" });
        return;
      } catch {
        setStatus({ type: "error", msg: "Couldn't send online. Opening email instead." });
        window.location.href = buildMailto(form);
        return;
      }
    }

    // Default: mailto (works without backend).
    window.location.href = buildMailto(form);
    setStatus({ type: "idle", msg: "" });
  };

  return (
    <section id="estimate" className="section bg-cloud relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={asset("images/estimate-bg.jpg")}
          alt="Painting tools background"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cloud via-cloud/80 to-cloud" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Get Free Estimate</h2>
            <p className="mt-3 text-ink/60 font-sans">
              Tell us a bit about your project. We&apos;ll respond quickly with next steps and a clear quote.
            </p>

            <div className="mt-6 rounded-xl2 bg-white/70 backdrop-blur border border-black/5 p-5 shadow-soft">
              <div className="text-sm text-ink/70 font-sans">
                <div className="font-semibold text-ink">Email</div>
                <div className="mt-1">{site.emailInfo}</div>
                <div className="mt-1">{site.emailEstimate}</div>

                <div className="mt-4 font-semibold text-ink">Phone</div>
                <div className="mt-1">{site.phoneDisplay}</div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-xl2 bg-white shadow-lift border border-black/5 p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm font-semibold text-ink/80">
                Name
                <input
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-cloud px-4 py-3 text-sm outline-none focus:border-gold-300"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="text-sm font-semibold text-ink/80">
                Phone
                <input
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-cloud px-4 py-3 text-sm outline-none focus:border-gold-300"
                  placeholder="(xxx) xxx-xxxx"
                  required
                />
              </label>

              <label className="text-sm font-semibold text-ink/80 sm:col-span-2">
                Email
                <input
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-cloud px-4 py-3 text-sm outline-none focus:border-gold-300"
                  placeholder="you@email.com"
                  type="email"
                  required
                />
              </label>

              <label className="text-sm font-semibold text-ink/80 sm:col-span-2">
                Project Type
                <select
                  value={form.projectType}
                  onChange={(e) => setForm((p) => ({ ...p, projectType: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-cloud px-4 py-3 text-sm outline-none focus:border-gold-300"
                >
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Cabinet Refinishing</option>
                  <option>Trim & Doors</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-ink/80 sm:col-span-2">
                Project details
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="mt-2 min-h-[120px] w-full rounded-xl border border-black/10 bg-cloud px-4 py-3 text-sm outline-none focus:border-gold-300"
                  placeholder="Tell us about rooms, surfaces, timeline, and any special requests..."
                />
              </label>
            </div>

            {status.type !== "idle" && (
              <div
                className={
                  "mt-4 rounded-xl px-4 py-3 text-sm font-sans " +
                  (status.type === "success"
                    ? "bg-green-50 text-green-800"
                    : status.type === "error"
                      ? "bg-amber-50 text-amber-900"
                      : "bg-cloud text-ink/70")
                }
              >
                {status.type === "loading" ? "Sending..." : status.msg}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-xs text-ink/50 font-sans">
                By submitting, you agree to be contacted about your estimate.
              </div>

              <button
                disabled={!canSubmit || status.type === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-gold-500 disabled:opacity-60 transition"
              >
                Request Estimate
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
