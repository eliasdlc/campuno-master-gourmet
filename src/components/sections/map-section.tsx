import { Reveal, SectionHeader } from "@/components/reveal";
import { Hibiscus, CitrusHalf } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { LOCATIONS, CONTACT } from "@/lib/content";

export function MapSection() {
  return (
    <section
      id="contacto"
      style={{ padding: "120px 0", background: "var(--cream)" }}
    >
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}
      >
        <SectionHeader
          overline="Encuéntranos"
          title="Dos destinos"
          scriptPart="al alcance."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: 28,
          }}
        >
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 120}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "2px solid var(--ink)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "6px 6px 0 var(--ink)",
                }}
              >
                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 8,
                    }}
                  >
                    {i === 0 ? (
                      <Hibiscus size={26} />
                    ) : (
                      <CitrusHalf size={26} />
                    )}
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontSize: 26,
                        fontWeight: 600,
                        color: "var(--ink)",
                      }}
                    >
                      {loc.name}
                    </h3>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                    {loc.address}
                  </div>
                </div>
                <iframe
                  src={loc.mapsEmbed}
                  width="100%"
                  height="280"
                  style={{
                    border: 0,
                    borderTop: "2px solid var(--ink)",
                    borderBottom: "2px solid var(--ink)",
                    display: "block",
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${loc.name}`}
                />
                <div
                  style={{
                    padding: 18,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      background: "transparent",
                      color: "var(--ink)",
                      borderRadius: 999,
                      fontSize: 12,
                      fontFamily: "var(--font-jost)",
                      fontWeight: 500,
                      border: "2px solid var(--ink)",
                      textDecoration: "none",
                      transition: "all 280ms",
                    }}
                  >
                    Cómo llegar <TropIcon name="arrowUpRight" size={13} />
                  </a>
                  <a
                    href={CONTACT.whatsappReserva}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 18px",
                      background: "var(--hibiscus)",
                      color: "#fff",
                      borderRadius: 999,
                      fontSize: 12,
                      fontFamily: "var(--font-jost)",
                      fontWeight: 500,
                      border: "2px solid var(--hibiscus)",
                      textDecoration: "none",
                      transition: "all 280ms",
                    }}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
