import React, { useMemo, useState } from "react";
import { useLeadModal } from "../context/leadModal.jsx";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function LeadModal() {
  const { isOpen, close } = useLeadModal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | success

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!isValidEmail(form.email)) e.email = "Enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Demo submission (resume-friendly)
    setStatus("success");

    // Optional: store locally to show "data handling"
    const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("leads", JSON.stringify(leads));

    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
      close();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get started form"
      onMouseDown={(e) => {
        // click outside to close
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* modal card */}
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b1220] p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-white text-xl font-semibold">Get Started</h2>
            <p className="text-white/70 mt-1 text-sm">
              Leave your details — demo modal with validation + local storage.
            </p>
          </div>

          <button
            type="button"
            onClick={close}
            className="text-white/70 hover:text-white"
            aria-label="Close modal"
            title="Close"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-200">
            Submitted successfully ✅
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-white/80 text-sm">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-300 text-xs mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="text-white/80 text-sm">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-300 text-xs mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="text-white/80 text-sm">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                placeholder="What are you looking for?"
              />
              {errors.message && <p className="text-red-300 text-xs mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`w-full rounded-xl py-2 font-semibold ${
                canSubmit ? "bg-white text-black hover:opacity-90" : "bg-white/25 text-white/60 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
