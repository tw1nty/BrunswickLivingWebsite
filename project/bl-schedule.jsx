// Brunswick Living — multi-step schedule drawer
const { useState, useEffect, useMemo } = React;

function nextWeekdays(n) {
  const out = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < n) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) out.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function ScheduleDrawer({ open, onClose, prefillCategory }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", note: "" });
  const dates = useMemo(() => nextWeekdays(12), []);

  useEffect(() => {
    if (open) { setStep(0); setDate(null); setTime(null); setForm({ name: "", business: "", phone: "", email: "", note: prefillCategory ? `Interested in: ${prefillCategory}` : "" }); }
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open, prefillCategory]);

  const canNext =
    (step === 0 && date) ||
    (step === 1 && time) ||
    (step === 2 && form.name && form.business && (form.phone || form.email));

  const next = () => setStep(s => Math.min(s + 1, 3));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const fmtDate = (d) => d ? d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "";

  return (
    <>
      <div className={"drawer-backdrop" + (open ? " open" : "")} onClick={onClose} />
      <aside className={"drawer" + (open ? " open" : "")} role="dialog" aria-label="Schedule a conversation">
        <div className="drawer-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 2 }}>Schedule</div>
            <div className="title">A 20-minute conversation</div>
          </div>
          <button className="close" onClick={onClose} aria-label="Close">
            <Close size={22}/>
          </button>
        </div>

        <div className="drawer-steps">
          {[0,1,2,3].map(i => (
            <div key={i} className={"step" + (i < step ? " done" : i === step ? " current" : "")}/>
          ))}
        </div>

        <div className="drawer-body">
          {step === 0 && (
            <div>
              <h3>Pick a day that works.</h3>
              <p className="lead">We come to you — at your shop, your office, or over coffee on Potomac Street.</p>
              <div className="date-grid">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    className={"date-btn" + (date && d.getTime() === date.getTime() ? " selected" : "")}
                    onClick={() => setDate(d)}
                  >
                    <span className="dow">{d.toLocaleDateString("en-US", { weekday: "short" })}</span>
                    <span className="day">{d.getDate()}</span>
                    <span className="mon">{d.toLocaleDateString("en-US", { month: "short" })}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3>Pick a time.</h3>
              <p className="lead">{fmtDate(date)} · Eastern time, Brunswick MD.</p>
              <div className="time-grid">
                {TIMES.map(t => (
                  <button
                    key={t}
                    className={"time-btn" + (time === t ? " selected" : "")}
                    onClick={() => setTime(t)}
                  >{t}</button>
                ))}
              </div>
              <p style={{ marginTop: 24, fontSize: 13, color: "var(--ink-3)", lineHeight: 1.5 }}>
                Don't see a time that works? Pick the closest one — we'll reach out to confirm or suggest an alternative.
              </p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>How can we reach you?</h3>
              <p className="lead">No mailing list. No follow-up emails. Just confirmation for {fmtDate(date)} at {time}.</p>

              <div className="field">
                <label>Your name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Pat Burgess" />
              </div>
              <div className="field">
                <label>Business name</label>
                <input value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} placeholder="Burgess & Sons Plumbing" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div className="field">
                  <label>Phone</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="(301) 555-0123" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="pat@..." />
                </div>
              </div>
              <div className="field">
                <label>What's on your mind?</label>
                <textarea rows={3} value={form.note} onChange={e => setForm({ ...form, note: e.target.value })}
                  placeholder="Just curious about the magazine, or have a specific category in mind…" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ display: "flex", justifyContent: "center", margin: "8px 0 24px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--forest)", color: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={28}/>
                </div>
              </div>
              <h3 style={{ textAlign: "center" }}>You're on the books.</h3>
              <p className="lead" style={{ textAlign: "center" }}>We'll be in touch within one business day to confirm.</p>

              <div className="confirm-box">
                <div className="eyebrow" style={{ marginBottom: 4 }}>Your appointment</div>
                <div className="when">{fmtDate(date)} · {time}</div>
                <div className="who">{form.name} · {form.business}</div>
              </div>

              <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start", fontSize: 14, color: "var(--ink-2)" }}>
                  <Phone size={18} style={{ color: "var(--forest)" }}/>
                  <div>We'll call <strong style={{ color: "var(--ink)" }}>{form.phone || form.email}</strong> to confirm details.</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start", fontSize: 14, color: "var(--ink-2)" }}>
                  <Pin size={18} style={{ color: "var(--forest)" }}/>
                  <div>The meeting is in-person, at a place that's easy for you. Tell us where when we call.</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start", fontSize: 14, color: "var(--ink-2)" }}>
                  <Calendar size={18} style={{ color: "var(--forest)" }}/>
                  <div>Need to reschedule? Just reply to the confirmation — no hassle.</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="drawer-foot">
          {step > 0 && step < 3
            ? <button className="back" onClick={back}>← Back</button>
            : <span/>
          }
          {step < 3 && (
            <button
              className="btn btn-primary"
              onClick={next}
              disabled={!canNext}
              style={{ opacity: canNext ? 1 : 0.4, pointerEvents: canNext ? "auto" : "none" }}
            >
              {step === 2 ? "Confirm appointment" : "Continue"}
              <ArrowRight size={16}/>
            </button>
          )}
          {step === 3 && (
            <button className="btn btn-primary" onClick={onClose}>Done</button>
          )}
        </div>
      </aside>
    </>
  );
}

window.ScheduleDrawer = ScheduleDrawer;
