"use client";
import { Reveal } from "@/components/reveal";
import {
  Hibiscus,
  PalmLeaf,
  MonsteraLeaf,
  CitrusHalf,
  StarBurst,
} from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { CONTACT } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 100,
        paddingBottom: 80,
        background: "var(--cream)",
      }}
    >
      {/* Decorative flora */}
      <div
        className="animate-float hidden lg:block"
        style={{ position: "absolute", top: 90, right: -40, zIndex: 2 }}
      >
        <PalmLeaf size={260} color="#2d5e3e" />
      </div>
      <div
        className="animate-sway hidden lg:block"
        style={{ position: "absolute", top: 140, left: -60, zIndex: 2 }}
      >
        <MonsteraLeaf size={240} color="#2d5e3e" />
      </div>
      <div
        className="animate-float"
        style={{
          position: "absolute",
          bottom: 120,
          left: "8%",
          zIndex: 2,
        }}
      >
        <Hibiscus size={90} />
      </div>
      <div
        style={{ position: "absolute", top: "25%", right: "12%", zIndex: 2 }}
      >
        <CitrusHalf size={70} />
      </div>
      <div
        style={{ position: "absolute", bottom: "18%", right: "8%", zIndex: 2 }}
      >
        <StarBurst size={50} color="#f2c14e" />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: "25%",
          zIndex: 2,
        }}
      >
        <Hibiscus size={60} color="#e88a3c" center="#f2c14e" />
      </div>

      {/* Sun glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(242,193,78,0.35) 0%, rgba(242,193,78,0.12) 40%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 28,
                height: 1,
                background: "var(--hibiscus)",
              }}
            />
            <div className="overline-trop">
              Santiago · República Dominicana
            </div>
            <div
              style={{
                width: 28,
                height: 1,
                background: "var(--hibiscus)",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h1
            style={{
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
              marginBottom: 20,
            }}
          >
            Sabor con
            <br />
            <span
              className="script"
              style={{
                fontSize: "1.1em",
                color: "var(--hibiscus)",
                display: "inline-block",
                transform: "rotate(-3deg)",
              }}
            >
              alma
            </span>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>
              {" "}
              dominicana.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={320}>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--ink-soft)",
              maxWidth: 580,
              margin: "0 auto",
              fontWeight: 400,
            }}
          >
            Dos mesas llenas de flores, música y platos que saben a casa —
            pero elevados con ingredientes de primera. Cocina gourmet, corazón
            Cibaeño.
          </p>
        </Reveal>

        <Reveal delay={460}>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#reservar"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "var(--hibiscus)",
                color: "#fff",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-jost)",
                border: "2px solid var(--hibiscus)",
                textDecoration: "none",
                transition: "all 280ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--hibiscus-deep)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--hibiscus)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              Reservar una mesa <TropIcon name="arrowRight" size={16} />
            </a>
            <a
              href="#menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "transparent",
                color: "var(--ink)",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-jost)",
                border: "2px solid var(--ink)",
                textDecoration: "none",
                transition: "all 280ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                (e.currentTarget as HTMLElement).style.color = "var(--paper)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
            >
              Ver el menú
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div
            style={{
              marginTop: 56,
              display: "flex",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--ink-soft)",
                fontSize: 13,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 2,
                  color: "var(--sunshine)",
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <TropIcon key={i} name="star" size={14} />
                ))}
              </div>
              <span>
                <b style={{ color: "var(--ink)" }}>4.9</b> · valoración
                comensales
              </span>
            </div>
            <div
              style={{ width: 1, height: 16, background: "var(--c-border)" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--ink-soft)",
                fontSize: 13,
              }}
            >
              <TropIcon name="leaf" size={14} /> Ingredientes locales
            </div>
            <div
              style={{ width: 1, height: 16, background: "var(--c-border)" }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "var(--ink-soft)",
                fontSize: 13,
              }}
            >
              <TropIcon name="clock" size={14} /> Abierto hoy hasta 11PM
            </div>
          </div>
        </Reveal>
      </div>

      {/* Floating stamp */}
      <div
        className="animate-float hidden sm:block"
        style={{
          position: "absolute",
          top: 130,
          right: "10%",
          zIndex: 6,
        }}
      >
        <div className="stamp">¡Flor Nacional!</div>
      </div>
    </section>
  );
}
