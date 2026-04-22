"use client";
import { useState, useEffect } from "react";
import { Hibiscus } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "menu", label: "Menú" },
  { id: "sucursales", label: "Sucursales" },
  { id: "eventos", label: "Eventos" },
  { id: "reservar", label: "Reservar" },
];

function Logo() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-2.5 no-underline"
      style={{ textDecoration: "none" }}
    >
      <Hibiscus size={32} />
      <div className="flex flex-col" style={{ lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: 22,
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            fontStyle: "italic",
          }}
        >
          Campuno
        </div>
        <div
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: 9,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
            marginTop: 2,
          }}
        >
          Master Gourmet
        </div>
      </div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = links.map((l) => l.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top < 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        transition: "all 300ms",
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(251, 244, 232, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--c-border-soft)" : "none",
      }}
    >
      <div
        className="container-main"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Logo />

        {/* Desktop links */}
        <div
          className="hidden md:flex gap-7 items-center"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          id="nav-links"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: 13,
                fontWeight: 500,
                color: active === l.id ? "var(--hibiscus)" : "var(--ink-soft)",
                textDecoration: "none",
                position: "relative",
                padding: "6px 2px",
              }}
            >
              {l.label}
              {active === l.id && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 3,
                    background: "var(--sunshine)",
                    borderRadius: 2,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="#reservar"
            className="hidden md:inline-flex btn-nav"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 22px",
              background: "var(--hibiscus)",
              color: "#fff",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              fontFamily: "var(--font-jost)",
              border: "2px solid var(--hibiscus)",
              textDecoration: "none",
              transition: "all 280ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--hibiscus-deep)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--hibiscus)";
            }}
          >
            Reservar <TropIcon name="arrowRight" size={14} />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            style={{ color: "var(--ink)" }}
            aria-label="Menú"
          >
            <TropIcon name="menu" size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--cream)",
            zIndex: 80,
            display: "flex",
            flexDirection: "column",
          }}
          className="animate-fadein"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: 24,
              borderBottom: "1px solid var(--c-border-soft)",
            }}
          >
            <Logo />
            <button
              onClick={() => setOpen(false)}
              style={{ color: "var(--ink)" }}
            >
              <TropIcon name="x" size={22} />
            </button>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 40,
              gap: 24,
              justifyContent: "center",
            }}
          >
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontSize: 32,
                  fontStyle: "italic",
                  color: "var(--ink)",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px dashed var(--c-border)",
                  paddingBottom: 14,
                }}
              >
                {l.label}
                <span
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontStyle: "normal",
                    fontSize: 11,
                    color: "var(--hibiscus)",
                    letterSpacing: "0.2em",
                  }}
                >
                  0{i + 1}
                </span>
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "16px",
                background: "var(--hibiscus)",
                color: "#fff",
                borderRadius: 999,
                fontSize: 14,
                fontFamily: "var(--font-jost)",
                border: "2px solid var(--hibiscus)",
                textDecoration: "none",
              }}
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
