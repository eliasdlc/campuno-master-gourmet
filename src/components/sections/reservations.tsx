"use client";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Hibiscus, CitrusHalf, Pineapple } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { CONTACT } from "@/lib/content";

const times = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];
const groupSizes = ["1–2", "3–4", "5–6", "7–8", "9+"];

export function Reservations() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "villa-olga",
    date: "",
    time: "7:00 PM",
    guests: "1–2",
    occasion: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (form.name.trim().length < 2) errs.name = "Nombre requerido";
    if (form.phone.trim().length < 8) errs.phone = "Teléfono requerido";
    if (!form.date) errs.date = "Fecha requerida";
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const locLabel =
      form.location === "villa-olga" ? "Villa Olga" : "Aeropuerto Cibao";
    const msg = `Reservación Campuno\n\nNombre: ${form.name}\nSucursal: ${locLabel}\nFecha: ${form.date}\nHora: ${form.time}\nPersonas: ${form.guests}\nOcasión: ${form.occasion || "N/A"}\nTeléfono: ${form.phone}`;
    window.open(
      `https://wa.me/18298163894?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="reservar"
      style={{
        padding: "120px 0",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-float hidden lg:block"
        style={{ position: "absolute", top: 100, right: "4%", zIndex: 1 }}
      >
        <Pineapple size={100} />
      </div>
      <div
        className="animate-float hidden lg:block"
        style={{ position: "absolute", bottom: 100, left: "4%", zIndex: 1 }}
      >
        <Hibiscus size={90} />
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 64,
            alignItems: "flex-start",
          }}
          className="res-grid"
        >
          {/* Left info */}
          <Reveal>
            <div>
              <div className="overline-trop" style={{ marginBottom: 18 }}>
                Reservaciones
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                  fontWeight: 500,
                  lineHeight: 1.05,
                  marginBottom: 20,
                  letterSpacing: "-0.015em",
                }}
              >
                Tu mesa te <br />
                <span
                  className="script"
                  style={{ fontSize: "1.15em", color: "var(--hibiscus)" }}
                >
                  está esperando.
                </span>
              </h2>
              <p
                style={{
                  color: "var(--ink-soft)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Llena el formulario y te confirmamos en 30 minutos por
                WhatsApp. Para grupos grandes o eventos, llámanos directo.
              </p>

              <div
                style={{
                  background: "var(--paper)",
                  border: "2px solid var(--ink)",
                  borderRadius: 18,
                  padding: 24,
                  boxShadow: "5px 5px 0 var(--ink)",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <a
                    href={CONTACT.phoneHref}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      color: "var(--ink)",
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "var(--hibiscus)",
                        color: "#fff",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TropIcon name="phone" size={15} />
                    </div>
                    {CONTACT.phone}
                  </a>
                  <a
                    href={CONTACT.whatsappReserva}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      color: "var(--ink)",
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "#25D366",
                        color: "#fff",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TropIcon name="whatsapp" size={15} />
                    </div>
                    WhatsApp directo
                  </a>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      color: "var(--ink-soft)",
                      fontSize: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "var(--mamey)",
                        color: "#fff",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <TropIcon name="clock" size={15} />
                    </div>
                    <div>
                      <div
                        style={{ color: "var(--ink)", fontWeight: 500 }}
                      >
                        Respondemos rápido
                      </div>
                      <div style={{ fontSize: 13 }}>
                        Confirmación en menos de 30 min
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              onSubmit={submit}
              style={{
                background: "var(--paper)",
                border: "2px solid var(--ink)",
                borderRadius: 24,
                padding: 36,
                boxShadow: "8px 8px 0 var(--ink)",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: -18, left: 32 }}>
                <div
                  className="stamp"
                  style={{ background: "var(--sunshine)" }}
                >
                  ¡Reserva ya!
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                  marginTop: 12,
                }}
                className="form-row"
              >
                <div>
                  <label className="form-label">Tu nombre</label>
                  <input
                    className="form-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Juan Pérez"
                  />
                  {errors.name && (
                    <div
                      style={{
                        color: "var(--hibiscus)",
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
                <div>
                  <label className="form-label">Teléfono</label>
                  <input
                    className="form-input"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="829-000-0000"
                  />
                  {errors.phone && (
                    <div
                      style={{
                        color: "var(--hibiscus)",
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <label className="form-label">¿En cuál sucursal?</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  {[
                    { id: "villa-olga", label: "Villa Olga", icon: <Hibiscus size={24} /> },
                    {
                      id: "aeropuerto",
                      label: "Aeropuerto Cibao",
                      icon: <CitrusHalf size={24} />,
                    },
                  ].map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => update("location", o.id)}
                      style={{
                        padding: "14px 16px",
                        border:
                          form.location === o.id
                            ? "2px solid var(--hibiscus)"
                            : "2px solid var(--c-border)",
                        background:
                          form.location === o.id
                            ? "rgba(217,68,58,0.08)"
                            : "var(--paper)",
                        color: "var(--ink)",
                        borderRadius: 14,
                        fontSize: 13,
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textAlign: "left",
                        transition: "all 200ms",
                        cursor: "pointer",
                      }}
                    >
                      {o.icon} {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 18,
                  marginTop: 18,
                }}
                className="form-row-3"
              >
                <div>
                  <label className="form-label">Fecha</label>
                  <input
                    className="form-input"
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                  {errors.date && (
                    <div
                      style={{
                        color: "var(--hibiscus)",
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {errors.date}
                    </div>
                  )}
                </div>
                <div>
                  <label className="form-label">Hora</label>
                  <select
                    className="form-select"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                  >
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Personas</label>
                  <select
                    className="form-select"
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                  >
                    {groupSizes.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginTop: 18 }}>
                <label className="form-label">
                  ¿Ocasión especial?{" "}
                  <span style={{ color: "var(--ink-mute)" }}>(opcional)</span>
                </label>
                <input
                  className="form-input"
                  value={form.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                  placeholder="Cumpleaños, aniversario..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: 28,
                  padding: "18px",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "var(--hibiscus)",
                  color: "#fff",
                  border: "2px solid var(--hibiscus)",
                  borderRadius: 999,
                  fontFamily: "var(--font-jost)",
                  fontWeight: 500,
                  cursor: "pointer",
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
                <TropIcon name="whatsapp" size={16} />{" "}
                {sent ? "¡Revisa tu WhatsApp!" : "Enviar por WhatsApp"}
              </button>

              <div
                style={{
                  fontSize: 12,
                  color: "var(--ink-mute)",
                  textAlign: "center",
                  marginTop: 14,
                  lineHeight: 1.6,
                }}
              >
                Te redirigimos a WhatsApp con los datos pre-llenados. Un
                anfitrión confirmará tu reserva.
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .res-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .form-row-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
