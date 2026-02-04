import React from "react";
import styles from "../style";

const plans = [
  { name: "Starter", price: "Free", perks: ["Basic analytics", "1 workspace", "Email support"] },
  { name: "Pro", price: "$9/mo", perks: ["Advanced analytics", "3 workspaces", "Priority support"] },
  { name: "Team", price: "$19/mo", perks: ["Team roles", "Unlimited workspaces", "SLA support"] },
];

export default function Pricing() {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} py-14`}>
        <h1 className="text-white text-3xl sm:text-4xl font-semibold">Pricing</h1>
        <p className="text-dimWhite mt-3 max-w-2xl">
          Tutorial-based UI, extended with real routing, theme toggle, and validated forms.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-white text-xl font-semibold">{p.name}</h2>
                <span className="text-white/90 font-medium">{p.price}</span>
              </div>

              <ul className="mt-5 space-y-2 text-dimWhite text-sm">
                {p.perks.map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="text-white/60">•</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-xl bg-white text-black py-2 font-semibold hover:opacity-90">
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
