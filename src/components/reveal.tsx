"use client";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal(delay);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("reveal", visible && "is-visible", className)}
      style={style}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  overline,
  title,
  italicPart,
  scriptPart,
  subtitle,
  align = "center",
}: {
  overline: string;
  title: string;
  italicPart?: string;
  scriptPart?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className="flex flex-col gap-4 mb-16"
      style={{
        textAlign: align,
        maxWidth: 760,
        margin: align === "center" ? "0 auto 72px" : "0 0 72px",
        alignItems: align === "center" ? "center" : "flex-start",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Reveal>
        <div className="overline-trop">{overline}</div>
      </Reveal>
      <Reveal delay={120}>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            margin: 0,
          }}
        >
          {title}
          {italicPart && (
            <>
              {" "}
              <span style={{ fontStyle: "italic", color: "var(--hibiscus)" }}>
                {italicPart}
              </span>
            </>
          )}
          {scriptPart && (
            <>
              {" "}
              <span
                className="script"
                style={{ fontSize: "1.1em", display: "inline-block", transform: "rotate(-2deg)" }}
              >
                {scriptPart}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={220}>
          <p
            style={{
              color: "var(--ink-soft)",
              fontSize: 16,
              maxWidth: 580,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
