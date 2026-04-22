"use client";
import { Reveal, SectionHeader } from "@/components/reveal";
import { Hibiscus, CitrusHalf, PalmLeaf } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { LOCATIONS, CONTACT } from "@/lib/content";

export function Locations() {
  return (
    <section
      id="sucursales"
      style={{
        padding: "120px 0",
        background: "var(--cream-warm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-sway hidden lg:block"
        style={{
          position: "absolute",
          top: 60,
          right: 40,
          opacity: 0.6,
          zIndex: 1,
        }}
      >
        <PalmLeaf size={180} flip />
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
        <SectionHeader
          overline="Nuestras Sucursales"
          title="Dos mesas,"
          scriptPart="un mismo cariño."
          subtitle="Villa Olga para las cenas de lujo y celebraciones. Aeropuerto Cibao para viajeros y almuerzos de negocios con vista al avión."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
            gap: 32,
          }}
        >
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 140}>
              <div
                className="ink-card"
                style={{
                  padding: 36,
                  position: "relative",
                  height: "100%",
                }}
              >
                {/* Stamp badge */}
                <div
                  style={{ position: "absolute", top: -16, right: 24 }}
                >
                  <div
                    className="stamp"
                    style={{
                      background:
                        i === 0 ? "var(--sunshine)" : "var(--mamey)",
                      color: i === 0 ? "var(--ink)" : "#fff",
                    }}
                  >
                    Sucursal 0{i + 1}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 8,
                    marginTop: 8,
                  }}
                >
                  {i === 0 ? (
                    <Hibiscus size={36} />
                  ) : (
                    <CitrusHalf size={36} />
                  )}
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 34,
                      fontWeight: 600,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {loc.name}
                  </h3>
                </div>

                <div
                  className="script"
                  style={{
                    fontSize: 22,
                    transform: "rotate(-1deg)",
                    marginBottom: 18,
                    display: "block",
                  }}
                >
                  {loc.subtitle}
                </div>

                <p
                  style={{
                    color: "var(--ink-soft)",
                    lineHeight: 1.75,
                    marginBottom: 24,
                    fontSize: 15,
                  }}
                >
                  {loc.highlight}
                </p>

                {/* Hours */}
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: 14,
                    padding: 18,
                    marginBottom: 20,
                    border: "1.5px dashed var(--c-border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--hibiscus)",
                      marginBottom: 10,
                      fontWeight: 600,
                    }}
                  >
                    Horarios
                  </div>
                  {loc.hours.map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "6px 0",
                        borderBottom:
                          idx < loc.hours.length - 1
                            ? "1px dotted var(--c-border)"
                            : "none",
                        fontSize: 13,
                      }}
                    >
                      <span style={{ color: "var(--ink)", fontWeight: 500 }}>
                        {h.days}
                      </span>
                      <span style={{ color: "var(--ink-soft)" }}>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    color: "var(--ink-soft)",
                    fontSize: 14,
                    marginBottom: 20,
                  }}
                >
                  <TropIcon name="mapPin" size={16} />
                  <span>{loc.address}</span>
                </div>

                <div
                  style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
                >
                  <a
                    href={loc.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
                      background: "transparent",
                      color: "var(--ink)",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 500,
                      fontFamily: "var(--font-jost)",
                      border: "2px solid var(--ink)",
                      textDecoration: "none",
                      transition: "all 280ms",
                    }}
                  >
                    Ver mapa <TropIcon name="arrowUpRight" size={13} />
                  </a>
                  <a
                    href={CONTACT.whatsappReserva}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "12px 20px",
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
                  >
                    Reservar aquí
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
