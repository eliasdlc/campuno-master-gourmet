"use client";
import { Reveal, SectionHeader } from "@/components/reveal";
import { StarBurst } from "@/components/flora";
import { TropIcon } from "@/components/trop-icon";
import { TESTIMONIALS } from "@/lib/content";

const rotations = [-1.5, 1, -0.5];
const bgColors = ["var(--paper)", "#fef4de", "#fdebd0"];
const avatarColors = ["var(--hibiscus)", "var(--mamey)", "var(--palm)"];

export function Testimonials() {
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
        style={{ position: "absolute", top: 40, left: "6%", zIndex: 1 }}
      >
        <StarBurst size={40} />
      </div>
      <div
        style={{ position: "absolute", bottom: 60, right: "8%", zIndex: 1 }}
      >
        <StarBurst size={50} color="var(--mamey)" />
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
          overline="Lo que dicen"
          title="Comensales"
          scriptPart="felices."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div
                style={{
                  background: bgColors[i % bgColors.length],
                  border: "2px solid var(--ink)",
                  borderRadius: 20,
                  padding: 30,
                  height: "100%",
                  boxShadow: "5px 5px 0 var(--ink)",
                  transform: `rotate(${rotations[i % rotations.length]}deg)`,
                  transition: "transform 300ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "rotate(0deg) translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    `rotate(${rotations[i % rotations.length]}deg)`;
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 2,
                    color: "var(--sunshine)",
                    marginBottom: 20,
                  }}
                >
                  {Array.from({ length: t.stars }).map((_, k) => (
                    <TropIcon key={k} name="star" size={16} />
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "var(--ink)",
                    marginBottom: 24,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    paddingTop: 16,
                    borderTop: "1px dashed var(--c-border)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background: avatarColors[i % avatarColors.length],
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 14,
                      fontWeight: 600,
                      border: "2px solid var(--ink)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "var(--ink)",
                        fontWeight: 600,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "var(--ink-mute)" }}
                    >
                      {t.context}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
