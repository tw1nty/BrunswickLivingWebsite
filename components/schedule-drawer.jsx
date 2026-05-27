"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Check, Close, Phone, Pin } from "@/components/icons";

const TIMES = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function nextWeekdays(count) {
  const out = [];
  const date = new Date();
  date.setDate(date.getDate() + 1);

  while (out.length < count) {
    const dow = date.getDay();
    if (dow !== 0 && dow !== 6) {
      out.push(new Date(date));
    }
    date.setDate(date.getDate() + 1);
  }

  return out;
}

function formatDate(date) {
  return date
    ? date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
      })
    : "";
}

export function ScheduleDrawer({ open, onClose, prefillCategory }) {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dates, setDates] = useState([]);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    note: ""
  });

  useEffect(() => {
    if (!open) return;

    setStep(0);
    setDate(null);
    setTime(null);
    setDates(nextWeekdays(12));
    setForm({
      name: "",
      business: "",
      phone: "",
      email: "",
      note: prefillCategory ? `Interested in: ${prefillCategory}` : ""
    });
  }, [open, prefillCategory]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const canNext =
    (step === 0 && date) ||
    (step === 1 && time) ||
    (step === 2 && form.name && form.business && (form.phone || form.email));

  const next = () => setStep((value) => Math.min(value + 1, 3));
  const back = () => setStep((value) => Math.max(value - 1, 0));

  return (
    <>
      <div className={`drawer-backdrop${open ? " open" : ""}`} onClick={onClose} />
      <aside
        className={`drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a conversation"
      >
        <div className="drawer-head">
          <div>
            <div className="eyebrow drawer-eyebrow">Schedule</div>
            <div className="title">A 20-minute conversation</div>
          </div>
          <button className="close" type="button" onClick={onClose} aria-label="Close">
            <Close size={22} />
          </button>
        </div>

        <div className="drawer-steps" aria-hidden="true">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`step${index < step ? " done" : index === step ? " current" : ""}`}
            />
          ))}
        </div>

        <div className="drawer-body">
          {step === 0 && (
            <div>
              <h3>Pick a day that works.</h3>
              <p className="lead">
                We come to you - at your shop, your office, or over coffee on Potomac Street.
              </p>
              <div className="date-grid">
                {dates.map((item) => (
                  <button
                    key={item.toISOString()}
                    type="button"
                    className={`date-btn${date && item.getTime() === date.getTime() ? " selected" : ""}`}
                    onClick={() => setDate(item)}
                  >
                    <span className="dow">
                      {item.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                    <span className="day">{item.getDate()}</span>
                    <span className="mon">
                      {item.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3>Pick a time.</h3>
              <p className="lead">{formatDate(date)} · Eastern time, Brunswick MD.</p>
              <div className="time-grid">
                {TIMES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`time-btn${time === item ? " selected" : ""}`}
                    onClick={() => setTime(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <p className="drawer-note">
                Don't see a time that works? Pick the closest one - we'll reach out to confirm
                or suggest an alternative.
              </p>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>How can we reach you?</h3>
              <p className="lead">
                No mailing list. No follow-up emails. Just confirmation for {formatDate(date)} at{" "}
                {time}.
              </p>

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="Pat Burgess"
                />
              </div>
              <div className="field">
                <label htmlFor="business">Business name</label>
                <input
                  id="business"
                  value={form.business}
                  onChange={(event) => setForm({ ...form, business: event.target.value })}
                  placeholder="Burgess & Sons Plumbing"
                />
              </div>
              <div className="field-grid">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    placeholder="(301) 555-0123"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="pat@..."
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="note">What's on your mind?</label>
                <textarea
                  id="note"
                  rows={3}
                  value={form.note}
                  onChange={(event) => setForm({ ...form, note: event.target.value })}
                  placeholder="Just curious about the magazine, or have a specific category in mind..."
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="confirm-icon">
                <Check size={28} />
              </div>
              <h3 className="centered">You're on the books.</h3>
              <p className="lead centered">We'll be in touch within one business day to confirm.</p>

              <div className="confirm-box">
                <div className="eyebrow confirm-eyebrow">Your appointment</div>
                <div className="when">
                  {formatDate(date)} · {time}
                </div>
                <div className="who">
                  {form.name} · {form.business}
                </div>
              </div>

              <div className="confirm-list">
                <div className="confirm-row">
                  <Phone size={18} />
                  <div>
                    We'll call <strong>{form.phone || form.email}</strong> to confirm details.
                  </div>
                </div>
                <div className="confirm-row">
                  <Pin size={18} />
                  <div>
                    The meeting is in-person, at a place that's easy for you. Tell us where when
                    we call.
                  </div>
                </div>
                <div className="confirm-row">
                  <Calendar size={18} />
                  <div>Need to reschedule? Just reply to the confirmation - no hassle.</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="drawer-foot">
          {step > 0 && step < 3 ? (
            <button className="back" type="button" onClick={back}>
              ← Back
            </button>
          ) : (
            <span />
          )}
          {step < 3 && (
            <button className="btn btn-primary" type="button" onClick={next} disabled={!canNext}>
              {step === 2 ? "Confirm appointment" : "Continue"}
              <ArrowRight size={16} />
            </button>
          )}
          {step === 3 && (
            <button className="btn btn-primary" type="button" onClick={onClose}>
              Done
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
