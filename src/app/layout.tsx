import type { Metadata } from "next";
import { Fraunces, Jost, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campuno Master Gourmet · Santiago RD",
  description:
    "Cocina gourmet con alma dominicana en Santiago. Dos sucursales: Villa Olga y Aeropuerto del Cibao.",
  keywords: ["restaurante", "Santiago", "República Dominicana", "gourmet", "cocina dominicana"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${jost.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
