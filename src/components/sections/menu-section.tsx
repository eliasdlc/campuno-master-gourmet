"use client";
import { useState } from "react";
import { Reveal, SectionHeader } from "@/components/reveal";
import {
  Hibiscus,
  StarBurst,
  CitrusHalf,
  Pineapple,
  MonsteraLeaf,
} from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { MENU_CATEGORIES, CONTACT } from "@/lib/content";

const catIcons: Record<string, React.ReactNode> = {
  entradas: <Hibiscus size={22} />,
  principales: <StarBurst size={22} />,
  mariscos: <CitrusHalf size={22} />,
  postres: <Pineapple size={22} />,
  bebidas: <CitrusHalf size={22} color="#e88a3c" />,
};

export function MenuSection() {
  const [activeId, setActiveId] = useState("entradas");
  const activeCat = MENU_CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section
      id="menu"
      style={{
        padding: "120px 0",
        background: "var(--cream)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-sway hidden lg:block"
        style={{
          position: "absolute",
          top: 40,
          left: -40,
          zIndex: 1,
          opacity: 0.5,
        }}
      >
        <MonsteraLeaf size={200} />
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
          overline="La Carta"
          title="Cocinamos con"
          scriptPart="mucho amor."
          subtitle="Todo fresco, todo del día. Precios sujetos a disponibilidad estacional de temporada."
        />

        {/* Category tabs */}
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              marginBottom: 56,
              overflowX: "auto",
              paddingBottom: 8,
              scrollbarWidth: "none",
              flexWrap: "wrap",
            }}
          >
            {MENU_CATEGORIES.map((cat) => {
              const isA = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 22px",
                    background: isA ? "var(--ink)" : "var(--paper)",
                    color: isA ? "#fff" : "var(--ink)",
                    border: "2px solid var(--ink)",
                    borderRadius: 999,
                    fontFamily: "var(--font-jost)",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "all 200ms",
                    whiteSpace: "nowrap",
                    boxShadow: isA ? "none" : "3px 3px 0 var(--ink)",
                    cursor: "pointer",
                  }}
                >
                  {catIcons[cat.id]}
                  {cat.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Menu items grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 18,
          }}
        >
          {activeCat.items.map((item, i) => (
            <Reveal key={`${activeId}-${i}`} delay={i * 60}>
              <div
                style={{
                  background: "var(--paper)",
                  border: "1.5px solid var(--c-border)",
                  borderRadius: 18,
                  padding: 22,
                  transition: "all 240ms",
                  position: "relative",
                  height: "100%",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--hibiscus)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--c-border)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 10,
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.name}
                  </h4>
                  {item.signature && (
                    <div
                      className="stamp"
                      style={{
                        fontSize: 9,
                        padding: "4px 10px",
                        boxShadow: "2px 2px 0 var(--ink)",
                        flexShrink: 0,
                      }}
                    >
                      Favorito
                    </div>
                  )}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-soft)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 12,
                    borderTop: "1px dashed var(--c-border)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "var(--hibiscus)",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <div
              style={{
                color: "var(--ink-soft)",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              ¿Tienes preguntas sobre ingredientes o alergias?
            </div>
            <a
              href={CONTACT.whatsappReserva}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "transparent",
                color: "var(--ink)",
                borderRadius: 999,
                fontSize: 13,
                fontFamily: "var(--font-jost)",
                border: "2px solid var(--ink)",
                textDecoration: "none",
                transition: "all 280ms",
              }}
            >
              <TropIcon name="whatsapp" size={14} /> Escríbenos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
