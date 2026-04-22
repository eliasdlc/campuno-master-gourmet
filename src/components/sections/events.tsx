"use client";
import { Reveal } from "@/components/reveal";
import { MonsteraLeaf, PalmLeaf } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { EVENTS, CONTACT } from "@/lib/content";

const accents = [
  "var(--hibiscus)",
  "var(--sunshine)",
  "var(--mamey)",
  "var(--sky)",
];

export function Events() {
  return (
    <section
      id="eventos"
      style={{
        padding: "120px 0",
        background: "var(--palm)",
        color: "var(--paper)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative leaves */}
      <div
        className="animate-sway hidden lg:block"
        style={{
          position: "absolute",
          top: 40,
          right: -30,
          opacity: 0.35,
        }}
      >
        <MonsteraLeaf size={220} color="#5f8e6e" />
      </div>
      <div
        className="animate-sway hidden lg:block"
        style={{
          position: "absolute",
          bottom: 40,
          left: -30,
          opacity: 0.3,
        }}
      >
        <PalmLeaf size={220} color="#5f8e6e" />
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: 11,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "var(--sunshine)",
                fontWeight: 600,
                marginBottom: 18,
              }}
            >
              Eventos Privados & Catering
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "var(--paper)",
                fontWeight: 500,
                letterSpacing: "-0.015em",
                lineHeight: 1.05,
              }}
            >
              Tu celebración merece{" "}
              <span
                className="script"
                style={{ color: "var(--sunshine)", fontSize: "1.1em" }}
              >
                este escenario.
              </span>
            </h2>
          </Reveal>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {EVENTS.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 120}>
              <div
                style={{
                  padding: 28,
                  borderRadius: 20,
                  background: "rgba(251, 244, 232, 0.08)",
                  border: "2px solid rgba(251, 244, 232, 0.2)",
                  backdropFilter: "blur(4px)",
                  height: "100%",
                  transition: "all 300ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(251, 244, 232, 0.14)";
                  el.style.borderColor = accents[i % accents.length];
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(251, 244, 232, 0.08)";
                  el.style.borderColor = "rgba(251, 244, 232, 0.2)";
                  el.style.transform = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: accents[i % accents.length],
                    borderRadius: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink)",
                    marginBottom: 24,
                    border: "2px solid var(--ink)",
                  }}
                >
                  <TropIcon name={ev.icon} size={22} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 22,
                    fontWeight: 600,
                    color: "var(--paper)",
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {ev.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(251, 244, 232, 0.8)",
                    lineHeight: 1.7,
                  }}
                >
                  {ev.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <div
              style={{
                color: "rgba(251, 244, 232, 0.85)",
                fontSize: 15,
                marginBottom: 18,
              }}
            >
              ¿Tienes un evento en mente?
            </div>
            <a
              href={CONTACT.whatsappReserva}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 32px",
                background: "var(--sunshine)",
                color: "var(--ink)",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-jost)",
                border: "2px solid var(--sunshine)",
                textDecoration: "none",
                transition: "all 280ms",
              }}
            >
              Hablemos de tu evento{" "}
              <TropIcon name="arrowRight" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
