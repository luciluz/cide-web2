"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   Framer Motion variants — ritmo pausado y contemplativo
   ──────────────────────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.55,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" as const },
  },
};

const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" as const },
  },
};

/* ────────────────────────────────────────────────────────────
   Hero Component
   ──────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label="Sección principal"
    >
      {/* ── Fondo: mono_publicacion-1 con pulsación suave ── */}
      <div className="absolute inset-0 animate-breathe" aria-hidden="true">
        <Image
          src="/assets/mono_publicacion-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ── Vignette suave para dar profundidad ── */}
      <div className="absolute inset-0 hero-vignette" aria-hidden="true" />

      {/* ── Líneas ornamentales horizontales ── */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />

      {/* ── Contenido centrado ── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24">
        <motion.div
          className="flex flex-col items-center gap-6 max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow label institucional */}
          <motion.span
            className="text-eyebrow text-primary-pale tracking-widest"
            style={{ fontSize: "clamp(0.75rem, 0.8vw + 0.4rem, 1rem)" }}
            variants={fadeUp}
          >
            Centro de Investigación para el Desarrollo Espiritual
          </motion.span>

          {/* Divisor ornamental breve */}
          <motion.div
            className="w-10 h-px bg-primary-pale"
            variants={fadeIn}
          />

          {/* H1 — texto requerido exacto */}
          <motion.h1
            className="heading-hero text-primary"
            variants={fadeUp}
          >
            Conocimiento al servicio{" "}
            <em
              className="not-italic"
              style={{ color: "var(--primary-light)" }}
            >
              de la vida espiritual
            </em>{" "}
            en el planeta
          </motion.h1>

          {/* Línea ornamental con asterisco */}
          <motion.div
            className="rule-ornamental w-32 my-1"
            variants={fadeIn}
            aria-hidden="true"
          >
            <span className="text-xs text-primary-pale opacity-60">✦</span>
          </motion.div>

          {/* Scroll cue */}
          <motion.p
            className="text-eyebrow text-text-muted opacity-60 mt-6"
            variants={fadeUp}
          >
            Desplazar hacia abajo
          </motion.p>
        </motion.div>
      </div>

      {/* ── Marca institucional inferior izquierda ── */}
      <motion.div
        className="absolute bottom-8 left-8 flex items-center gap-3"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        <div className="w-6 h-px bg-primary/40" />
        <span
          className="text-eyebrow text-text-muted opacity-50"
          style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}
        >
          CIDE · 2025
        </span>
      </motion.div>
    </section>
  );
}
