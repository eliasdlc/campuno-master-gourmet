"use client";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Hibiscus, CitrusHalf, PalmLeaf } from "@/components/flora";

const stats = [
  { n: "2", label: "Sucursales", color: "var(--hibiscus)" },
  { n: "10+", label: "Años cocinando", color: "var(--mamey)" },
  { n: "50+", label: "Platos de autor", color: "var(--palm)" },
  { n: "100%", label: "Ingredientes locales", color: "var(--hibiscus)" },
];

export function Ambiance() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "var(--cream-warm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <SectionHeader
          overline="Así se siente"
          title="Cada esquina,"
          scriptPart="una historia."
          subtitle="Flores frescas cada mañana, música en vivo los viernes, y esa calidez que solo tiene una casa dominicana."
        />

        {/* Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gridTemplateRows: "260px 260px",
            gap: 20,
          }}
          className="amb-grid"
        >
          <Reveal style={{ gridRow: "span 2" }}>
            <div
              className="img-placeholder"
              style={{
                height: "100%",
                minHeight: 540,
                borderRadius: 20,
                border: "2px solid var(--ink)",
                boxShadow: "6px 6px 0 var(--ink)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  zIndex: 3,
                }}
              >
                <div
                  className="script"
                  style={{ fontSize: 32, marginBottom: 4, display: "block" }}
                >
                  Villa Olga
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 24,
                    color: "var(--ink)",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  El salón principal
                </div>
              </div>
              <div
                className="animate-float"
                style={{ position: "absolute", top: 20, right: 20 }}
              >
                <Hibiscus size={60} />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.15,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--ink)",
                  fontFamily: "monospace",
                }}
              >
                Salón Villa Olga · Flores frescas
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="img-placeholder"
              style={{
                height: "100%",
                borderRadius: 20,
                border: "2px solid var(--ink)",
                boxShadow: "6px 6px 0 var(--ink)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 20,
                    color: "var(--ink)",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Patio de palmeras
                </div>
              </div>
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <PalmLeaf size={60} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div
              className="img-placeholder"
              style={{
                height: "100%",
                borderRadius: 20,
                border: "2px solid var(--ink)",
                boxShadow: "6px 6px 0 var(--ink)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 20,
                    color: "var(--ink)",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Terraza Aeropuerto
                </div>
              </div>
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <CitrusHalf size={50} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats row */}
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 20,
              marginTop: 72,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "var(--paper)",
                  border: "2px solid var(--ink)",
                  borderRadius: 18,
                  padding: 24,
                  textAlign: "center",
                  boxShadow: "4px 4px 0 var(--ink)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 54,
                    fontWeight: 600,
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: 6,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .amb-grid { grid-template-columns: 1fr !important; grid-template-rows: auto !important; }
          .amb-grid > div { grid-row: auto !important; min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
