"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ── Iconos SVG ── */
function IconResearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><circle cx="11" cy="11" r="3" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconSpirit() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" /><line x1="12" y1="8" x2="12" y2="6" />
    </svg>
  );
}
function IconHealing() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 4.048 3.03 2 5.5 2c1.742 0 3.205.912 4.5 2.402C11.295 2.912 12.758 2 14.5 2 16.97 2 19 4.048 19 7.191c0 4.105-5.37 8.863-11 14.402z" />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const FEATURES = [
  { Icon: IconResearch,  title: "Investigación sin dogmas",  desc: "Proyectos interdisciplinarios donde la espiritualidad se estudia con rigor, nunca como imposición." },
  { Icon: IconSpirit,    title: "Diversidad espiritual",     desc: "Ciencias sociales y tradiciones contemplativas como campos legítimos y complementarios." },
  { Icon: IconHealing,   title: "Sanación integrativa",      desc: "Medicinas complementarias y salud intercultural en el centro de nuestra práctica." },
  { Icon: IconCommunity, title: "Equipos plurales",          desc: "Sanadores, académicos y practicantes contribuyen juntos desde sus saberes propios." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

export default function ParadigmaSection() {
  return (
    <section
      aria-label="Paradigma del CIDE"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #FDFCFB 0%, #F2EBE2 55%, #EDE4D8 100%)",
      }}
    >
      {/* ── Cuenco: fondo absoluto full-width, Z=1 (debajo del contenido) ── */}
      {/*
        ╔══════════════════════════════════════════════════════╗
        ║  BOWL — AJUSTES MANUALES                            ║
        ║  objectPosition: dónde se centra la imagen (X Y)   ║
        ║  opacity (imagen): visibilidad 0–1                  ║
        ║  top: posición vertical del contenedor              ║
        ║  ── GRADIENTE ──                                     ║
        ║  El "62%" final = hasta dónde llega el fade.        ║
        ║  Más alto = bowl aparece más a la derecha.           ║
        ║  Más bajo = bowl aparece más hacia el centro.        ║
        ╚══════════════════════════════════════════════════════╝
      */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",      /* ← BOWL: posición vertical */
          left: 0,
          right: 0,
          width: "100%",   /* full-width: sin aristas laterales */
          height: "115%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* Gradiente de izquierda a derecha — colores exactos del fondo de sección */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            /*
             * ← BOWL FADE: ajustar el último porcentaje para controlar
             * hasta dónde llega la zona transparente (donde aparece el cuenco).
             * "62%" = el bowl se ve desde el 62% del ancho hacia la derecha.
             */
            background:
              "linear-gradient(to right, #FDFCFB 0%, #F8F3EE 25%, rgba(242,235,226,0.85) 40%, rgba(242,235,226,0.3) 53%, transparent 62%)",
          }}
        />
        <div
          className="bowl-bg-anim"
          style={{ position: "relative", width: "100%", height: "100%", zIndex: 1 }}
        >
          <Image
            src="/assets/sanacion con sonido_sanacion con sonido 1.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: "70% center",  /* ← BOWL: mueve la imagen horizontalmente */
              opacity: 0.38,                 /* ← BOWL: opacidad de la imagen           */
            }}
            priority
          />
        </div>
      </div>

      {/* ── Contenido — ancho completo, Z=10 sobre el cuenco ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "7rem 3rem 8rem",
        }}
      >
        {/* Cabecera — full width */}
        <motion.div
          style={{ marginBottom: "4rem" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px" }}
          custom={0}
        >
          <span className="text-eyebrow text-primary-pale block mb-5">
            Nuestro paradigma
          </span>
          <h2
            className="heading-section text-primary"
            style={{ lineHeight: 1.15, maxWidth: "22ch" }}
          >
            Donde el rigor académico encuentra{" "}
            <em style={{ color: "var(--primary-light)", fontStyle: "normal" }}>
              la vida espiritual
            </em>
          </h2>
        </motion.div>

        {/* Cards — grid 2×2, ancho completo */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
          className="md:grid-cols-4"
        >
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="feature-card"
              style={{
                padding: "1.6rem 1.75rem",
                borderRadius: "12px",
                border: "1px solid rgba(106,66,38,0.12)",
                background: "rgba(253,252,251,0.72)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-8% 0px" }}
              custom={i + 1}
            >
              <div style={{ color: "var(--primary)", marginBottom: "0.85rem", opacity: 0.8 }}>
                <Icon />
              </div>
              <h3
                className="font-sans"
                style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--primary)", marginBottom: "0.5rem", lineHeight: 1.3 }}
              >
                {title}
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cita + separador — debajo de las cards, ancho completo */}
        <motion.div
          style={{
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(106,66,38,0.15)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8% 0px" }}
          custom={5}
        >
          <blockquote style={{ maxWidth: "52ch" }}>
            <p
              className="font-sans"
              style={{
                fontSize: "clamp(0.95rem, 1vw + 0.4rem, 1.08rem)",
                lineHeight: 1.8,
                color: "var(--primary)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              "Si puedes detenerte a respirar consciente de estar ahí y deseas ampliar tu comprensión,{" "}
              <strong style={{ fontWeight: 500, fontStyle: "normal" }}>
                puedes estudiar con el CIDE y aportar con lo que tienes.
              </strong>"
            </p>
            <footer
              className="text-eyebrow text-primary-pale block mt-4"
              style={{ fontSize: "0.62rem" }}
            >
              ✦ &nbsp; Principio fundacional CIDE
            </footer>
          </blockquote>

          <p
            className="text-eyebrow text-primary-pale"
            style={{ fontSize: "0.65rem", opacity: 0.5, alignSelf: "flex-end" }}
          >
            CIDE · 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
