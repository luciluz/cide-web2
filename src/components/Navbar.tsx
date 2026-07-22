"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Servicios",     href: "#" },
  { label: "Investigación", href: "#" },
  { label: "Nosotros",      href: "#" },
  { label: "Contacto",      href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Bloquea el scroll del body cuando el menú móvil está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const glassBg = scrolled || menuOpen
    ? "rgba(253, 252, 251, 0.95)"
    : "transparent";

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: glassBg,
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled || menuOpen
          ? "1px solid rgba(106, 66, 38, 0.10)"
          : "1px solid transparent",
        transition: "background-color 0.5s ease, border-color 0.5s ease",
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
    >
      <nav
        className="flex items-center justify-between"
        style={{ padding: "1.75rem 3rem" }}
        aria-label="Navegación principal"
      >
        {/* ── Logo ── */}
        <Link href="/" aria-label="Inicio — CIDE" className="shrink-0 z-10">
          <Image
            src="/assets/logo.png"
            alt="CIDE — Centro de Investigación para el Desarrollo Espiritual"
            width={160}
            height={70}
            style={{ width: "auto", height: "auto" }}
            className="object-contain logo-img"
            priority
          />
        </Link>

        {/* ── Links — solo visibles en desktop ── */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>

        {/* ── Botón hamburguesa — solo visible en móvil ── */}
        <button
          className="md:hidden z-10 flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <motion.span
            className="block h-px bg-primary origin-center"
            style={{ width: "24px" }}
            animate={menuOpen
              ? { rotate: 45, y: 5 }
              : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-px bg-primary"
            style={{ width: "24px" }}
            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-px bg-primary origin-center"
            style={{ width: "24px" }}
            animate={menuOpen
              ? { rotate: -45, y: -5 }
              : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* ── Menú desplegable móvil ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full"
            style={{
              backgroundColor: "rgba(253, 252, 251, 0.97)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(106, 66, 38, 0.10)",
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul
              className="flex flex-col list-none m-0"
              style={{ padding: "1.5rem 3rem 2.5rem" }}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  style={{ borderBottom: "1px solid rgba(106, 66, 38, 0.08)", padding: "1rem 0" }}
                >
                  <Link
                    href={href}
                    className="font-body text-xs tracking-[0.2em] uppercase text-text opacity-60 hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ── NavLink desktop con línea expansiva al hover ── */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex flex-col items-center gap-0.5
                 font-body text-xs tracking-[0.2em] uppercase text-text
                 opacity-50 hover:opacity-100 transition-opacity duration-300
                 focus-visible:outline-none focus-visible:opacity-100"
    >
      {children}
      <span
        className="block h-px w-0 group-hover:w-full bg-primary transition-all duration-400 ease-out"
        aria-hidden="true"
      />
    </Link>
  );
}
