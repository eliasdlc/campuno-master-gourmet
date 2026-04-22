"use client";
import { Hibiscus, PalmLeaf } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { CONTACT } from "@/lib/content";

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Eventos", href: "#eventos" },
  { label: "Reservar", href: "#reservar" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { icon: "instagram" as const, href: CONTACT.instagram },
  { icon: "facebook" as const, href: CONTACT.facebook },
  { icon: "whatsapp" as const, href: CONTACT.whatsapp },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink)",
        color: "var(--paper)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-float hidden lg:block"
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          opacity: 0.2,
        }}
      >
        <PalmLeaf size={180} color="#7ec99b" />
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 24px 32px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <Hibiscus size={40} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 28,
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "var(--paper)",
                  }}
                >
                  Campuno
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    color: "rgba(251,244,232,0.6)",
                    marginTop: 2,
                  }}
                >
                  Master Gourmet
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(251,244,232,0.75)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 340,
                marginBottom: 22,
              }}
            >
              Cocina de autor con alma dominicana. Dos mesas llenas de sabor
              en Santiago.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    border: "2px solid var(--paper)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--paper)",
                    transition: "all 200ms",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--hibiscus)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--hibiscus)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--paper)";
                  }}
                >
                  <TropIcon name={s.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--sunshine)",
                marginBottom: 18,
                fontWeight: 600,
              }}
            >
              Explorar
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(251,244,232,0.85)",
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--sunshine)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(251,244,232,0.85)")
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--sunshine)",
                marginBottom: 18,
                fontWeight: 600,
              }}
            >
              Contacto
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <a
                href={CONTACT.phoneHref}
                style={{
                  color: "rgba(251,244,232,0.85)",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <TropIcon name="phone" size={14} /> {CONTACT.phone}
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "rgba(251,244,232,0.85)",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  textDecoration: "none",
                }}
              >
                <TropIcon name="whatsapp" size={14} /> WhatsApp
              </a>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(251,244,232,0.6)",
                  marginTop: 6,
                  lineHeight: 1.6,
                }}
              >
                Villa Olga · Mar–Dom
                <br />
                Aeropuerto · Lun–Dom
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px dashed rgba(251,244,232,0.2)",
            marginTop: 48,
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 14,
            fontSize: 12,
            color: "rgba(251,244,232,0.6)",
          }}
        >
          <div>
            © 2025 Campuno Master Gourmet · Todos los derechos reservados.
          </div>
          <div
            className="script"
            style={{ fontSize: 18, color: "var(--sunshine)" }}
          >
            Hecho con ♥ en Santiago, RD
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
