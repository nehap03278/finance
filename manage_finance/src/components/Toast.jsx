import React, { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => onClose?.(), 2200);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;

  const isError = type === "error";

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 rounded-xl px-4 py-3 shadow-lg border
      ${isError ? "bg-red-500/10 border-red-400/30 text-red-200" : "bg-emerald-500/10 border-emerald-400/30 text-emerald-200"}`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{message}</span>
        <button
          className="text-xs opacity-80 hover:opacity-100"
          onClick={onClose}
          aria-label="Close toast"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
