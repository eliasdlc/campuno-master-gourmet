import { Hibiscus } from "@/components/flora";

const items = [
  "Cocina de autor",
  "Santiago de los Caballeros",
  "Sabor Cibaeño",
  "Ingredientes frescos",
  "Desde 2015",
  "Dos sucursales",
  "Reservas abiertas",
];

export function MarqueeStrip() {
  const row = [...items, ...items];
  return (
    <div
      style={{
        background: "var(--hibiscus)",
        color: "#fff",
        padding: "16px 0",
        overflow: "hidden",
        position: "relative",
        borderTop: "2px solid var(--ink)",
        borderBottom: "2px solid var(--ink)",
      }}
    >
      <div
        className="animate-marquee"
        style={{ display: "flex", width: "max-content" }}
      >
        {row.map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              padding: "0 32px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {t}
            </span>
            <Hibiscus size={18} color="#f2c14e" center="#fff" />
          </div>
        ))}
      </div>
    </div>
  );
}
