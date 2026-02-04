import React from "react";
import styles from "../style";
import {
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div id="home" className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* MAIN SECTIONS */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="stats">
            <Stats />
          </section>

          <section id="features">
            <Business />
          </section>

          <section id="product">
            <Billing />
          </section>

          <section id="carddeal">
            <CardDeal />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="clients">
            <Clients />
          </section>

          <section id="cta">
            <CTA />
          </section>
            <div className="flex justify-end py-6">
  <button
    type="button"
    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
    className="text-dimWhite hover:text-white text-sm"
  >
    Back to top ↑
  </button>
</div>

          <Footer />
        </div>
      </div>
    </>
  );
}
