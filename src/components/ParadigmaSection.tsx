"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   Contenido de cada panel
   ──────────────────────────────────────────────────────────── */
const PANELS = [
  {
    id: "proposito",
    label: "Propósito",
    text: "Contribuir a la prosperidad integral de la vida en el planeta a través del estudio riguroso y transformador de la espiritualidad. La dimensión divina es considerada como dato, nunca como dogma.",
    detail: "Investigación · Bienestar · Transformación",
  },
  {
    id: "vision",
    label: "Visión",
    text: "Un mundo donde el conocimiento espiritual sea un campo legítimo de investigación capaz de dialogar con las ciencias, las tradiciones contemplativas y las comunidades de práctica.",
    detail: "Diversidad · Diálogo · Rigor",
  },
  {
    id: "mision",
    label: "Misión",
    text: "Conducir proyectos interdisciplinarios, formar equipos plurales —sanadores, académicos y practicantes— y proponer experiencias de bienestar basadas en evidencia y contemplación.",
    detail: "Ciencia · Contemplación · Comunidad",
  },
] as const;

type PanelId = (typeof PANELS)[number]["id"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

/* ────────────────────────────────────────────────────────────
   Componente
   ──────────────────────────────────────────────────────────── */
export default function ParadigmaSection() {
  const [active, setActive] = useState<PanelId | null>(null);

  const toggle = (id: PanelId) =>
    setActive((prev) => (prev === id ? null : id));

  return (
    <section
      aria-label="Paradigma del CIDE"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #FDFCFB 0%, #F2EBE2 55%, #EDE4D8 100%)",
      }}
    >
      {/* ── Cuenco de fondo ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%", left: 0, right: 0, width: "100%", height: "115%",
          zIndex: 1, pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            background:
              "linear-gradient(to right, #FDFCFB 0%, #F8F3EE 25%, rgba(242,235,226,0.85) 40%, rgba(242,235,226,0.3) 53%, transparent 62%)",
          }}
        />
        <div className="bowl-bg-anim" style={{ position: "relative", width: "100%", height: "100%", zIndex: 1 }}>
          <Image
            src="/assets/sanacion con sonido_sanacion con sonido 1.png"
            alt="" fill sizes="100vw" className="object-cover"
            style={{ objectPosition: "70% center", opacity: 0.38 }}
            priority
          />
        </div>
      </div>

      {/* ── Contenido ── */}
      <div
        style={{
          position: "relative", zIndex: 10,
          maxWidth: "1280px", margin: "0 auto",
          padding: "7rem 3rem 8rem",
        }}
      >
        {/* Cabecera */}
        <motion.div
          style={{ marginBottom: "4.5rem" }}
          variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-8% 0px" }}
          custom={0}
        >
          <span className="text-eyebrow text-primary-pale block mb-5">
            Nuestro paradigma
          </span>
          <h2 className="heading-section text-primary" style={{ lineHeight: 1.15, maxWidth: "22ch" }}>
            Donde el rigor académico encuentra{" "}
            <em style={{ color: "var(--primary-light)", fontStyle: "normal" }}>
              la vida espiritual
            </em>
          </h2>
        </motion.div>

        {/* ── Acordeón ── */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "500px" }}
          variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-8% 0px" }}
          custom={1}
        >
          {PANELS.map(({ id, label, text, detail }) => {
            const isActive = active === id;
            return (
              <div key={id}>
                {/* ── Botón ── */}
                <button
                  onClick={() => toggle(id)}
                  aria-expanded={isActive}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.5rem",
                    borderRadius: isActive ? "12px 12px 0 0" : "12px",
                    border: "1.5px solid",
                    borderColor: isActive
                      ? "var(--primary)"
                      : "rgba(106,66,38,0.2)",
                    background: isActive
                      ? "rgba(107,66,38,0.07)"
                      : "rgba(253,252,251,0.6)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                    outline: "none",
                    borderBottom: isActive ? "none" : "1.5px solid rgba(106,66,38,0.2)",
                  }}
                >
                  <span
                    className="font-sans"
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: isActive ? 600 : 400,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--primary)" : "var(--text-muted)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {label}
                  </span>

                  {/* Ícono + / × */}
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                    style={{ display: "flex", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                      <line x1="7" y1="1" x2="7" y2="13"
                        stroke={isActive ? "var(--primary)" : "var(--primary-pale)"}
                        strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="1" y1="7" x2="13" y2="7"
                        stroke={isActive ? "var(--primary)" : "var(--primary-pale)"}
                        strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>

                {/* ── Panel que se expande justo debajo del botón ── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "1.75rem 1.5rem 2rem",
                          borderRadius: "0 0 12px 12px",
                          border: "1.5px solid var(--primary)",
                          borderTop: "none",
                          background: "rgba(253,252,251,0.88)",
                          backdropFilter: "blur(16px)",
                          WebkitBackdropFilter: "blur(16px)",
                        }}
                      >
                        <p
                          className="font-sans"
                          style={{
                            fontSize: "clamp(0.9rem, 0.8vw + 0.4rem, 1.05rem)",
                            lineHeight: 1.85,
                            color: "var(--text)",
                            fontWeight: 300,
                            marginBottom: "1.25rem",
                          }}
                        >
                          {text}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: "var(--primary-pale)", fontSize: "0.55rem" }}>✦</span>
                          <span
                            className="text-eyebrow text-primary-pale"
                            style={{ fontSize: "0.58rem", letterSpacing: "0.2em", opacity: 0.75 }}
                          >
                            {detail}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* ── Separador inferior ── */}
        <motion.div
          style={{
            marginTop: "5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(106,66,38,0.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
          variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-8% 0px" }}
          custom={2}
        >
          <p
            className="font-sans"
            style={{
              fontSize: "clamp(0.9rem, 0.8vw + 0.4rem, 1rem)",
              color: "var(--text-muted)",
              fontStyle: "italic",
              fontWeight: 300,
              maxWidth: "50ch",
              lineHeight: 1.8,
            }}
          >
            "Si puedes detenerte a respirar consciente de estar ahí,{" "}
            <strong style={{ color: "var(--primary)", fontWeight: 400, fontStyle: "normal" }}>
              puedes estudiar con el CIDE.
            </strong>"
          </p>
          <span className="text-eyebrow text-primary-pale" style={{ fontSize: "0.6rem", opacity: 0.5 }}>
            ✦ &nbsp; CIDE · 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
}
