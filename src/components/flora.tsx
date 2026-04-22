export function Hibiscus({
  size = 80,
  color = "#d9443a",
  center = "#f2c14e",
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  center?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={style}
      className={className}
    >
      {[0, 72, 144, 216, 288].map((rot, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="28"
          rx="18"
          ry="26"
          fill={color}
          opacity="0.92"
          transform={`rotate(${rot} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="8" fill={center} />
      <circle cx="50" cy="50" r="3" fill="#a8291f" />
      {[0, 60, 120, 180, 240, 300].map((rot, i) => (
        <circle
          key={i}
          cx="50"
          cy="40"
          r="1.6"
          fill="#a8291f"
          transform={`rotate(${rot} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function PalmLeaf({
  size = 120,
  color = "#2d5e3e",
  className = "",
  style = {},
  flip = false,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  const fronds = [
    { y: 20, len: 28, angle: -60 },
    { y: 20, len: 28, angle: 60 },
    { y: 35, len: 34, angle: -55 },
    { y: 35, len: 34, angle: 55 },
    { y: 52, len: 38, angle: -50 },
    { y: 52, len: 38, angle: 50 },
    { y: 72, len: 40, angle: -45 },
    { y: 72, len: 40, angle: 45 },
    { y: 94, len: 36, angle: -40 },
    { y: 94, len: 36, angle: 40 },
  ];

  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 100 130"
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
      className={className}
    >
      <path
        d="M 50 130 Q 50 100 50 70 Q 50 40 50 10"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
      {fronds.map((f, i) => (
        <path
          key={i}
          d={`M 50 ${f.y} Q ${50 + f.len * 0.5 * Math.sin((f.angle * Math.PI) / 180)} ${f.y - 4} ${50 + f.len * Math.sin((f.angle * Math.PI) / 180)} ${f.y - Math.cos((f.angle * Math.PI) / 180) * f.len * 0.4}`}
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      ))}
    </svg>
  );
}

export function MonsteraLeaf({
  size = 120,
  color = "#2d5e3e",
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={style}
      className={className}
    >
      <g fill={color}>
        <path d="M60 10 Q 30 20 20 55 Q 15 85 40 105 Q 55 112 60 110 Q 65 112 80 105 Q 105 85 100 55 Q 90 20 60 10 Z" />
        <path
          d="M 35 40 L 55 50"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 85 40 L 65 50"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 28 65 L 52 68"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 92 65 L 68 68"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 38 88 L 55 88"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 82 88 L 65 88"
          stroke="#fbf4e8"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="60" cy="55" r="5" fill="#fbf4e8" />
      </g>
      <path d="M 60 115 L 60 60" stroke="#1e4329" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

export function CitrusHalf({
  size = 70,
  color = "#e88a3c",
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const segments = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      style={style}
      className={className}
    >
      <circle cx="35" cy="35" r="32" fill={color} />
      <circle cx="35" cy="35" r="26" fill="#fdf9f0" />
      <circle cx="35" cy="35" r="24" fill="#fae0b8" />
      {segments.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        return (
          <path
            key={i}
            d={`M 35 35 L ${35 + Math.cos(rad) * 22} ${35 + Math.sin(rad) * 22}`}
            stroke="#e88a3c"
            strokeWidth="1.2"
            opacity="0.5"
          />
        );
      })}
      <circle cx="35" cy="35" r="3" fill="#c26a1d" />
    </svg>
  );
}

export function StarBurst({
  size = 60,
  color = "#f2c14e",
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={style}
      className={className}
    >
      <g fill={color}>
        {[0, 45, 90, 135].map((a) => (
          <ellipse
            key={a}
            cx="30"
            cy="30"
            rx="4"
            ry="26"
            transform={`rotate(${a} 30 30)`}
          />
        ))}
        <circle cx="30" cy="30" r="6" fill={color} />
      </g>
    </svg>
  );
}

export function Pineapple({
  size = 90,
  style = {},
  className = "",
}: {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 80 104"
      style={style}
      className={className}
    >
      <g fill="#2d5e3e">
        <path d="M40 8 L30 28 L38 26 L30 44 L40 36 L50 44 L42 26 L50 28 Z" />
        <path d="M30 14 L22 32 L30 30 L24 44 L34 36 Z" opacity="0.8" />
        <path d="M50 14 L58 32 L50 30 L56 44 L46 36 Z" opacity="0.8" />
      </g>
      <ellipse cx="40" cy="70" rx="24" ry="30" fill="#e88a3c" />
      <g stroke="#c26a1d" strokeWidth="1.5" fill="none" opacity="0.7">
        {[45, 55, 65, 75, 85, 95].map((y) => (
          <line key={y} x1="18" y1={y} x2="62" y2={y} />
        ))}
        {[28, 36, 44, 52].map((x) => (
          <line key={x} x1={x} y1="44" x2={x + 8} y2="100" />
        ))}
        {[28, 36, 44, 52].map((x) => (
          <line key={`r${x}`} x1={x + 8} y1="44" x2={x} y2="100" />
        ))}
      </g>
    </svg>
  );
}

export function MiniDivider() {
  return (
    <div className="inline-flex items-center gap-3">
      <div
        className="h-0.5 w-10 rounded-full"
        style={{ background: "var(--hibiscus)" }}
      />
      <Hibiscus size={20} />
      <div
        className="h-0.5 w-10 rounded-full"
        style={{ background: "var(--hibiscus)" }}
      />
    </div>
  );
}
