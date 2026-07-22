import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

/* ── Scala Sans OT — fuente base del proyecto ── */
const scalaSans = localFont({
  src: "./fonts/ScalaSansOT-Regular.otf",
  variable: "--font-scala",
  display: "swap",
});

/* ── 7 Seconds — fuente display / especial ── */
const sevenSeconds = localFont({
  src: "./fonts/7Seconds.ttf",
  variable: "--font-7seconds",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIDE — Centro de Investigación para el Desarrollo Espiritual",
  description:
    "Conocimiento al servicio de la vida espiritual en el planeta. Centro de investigación riguroso dedicado al estudio y desarrollo de la espiritualidad.",
  keywords: ["CIDE", "espiritualidad", "investigación", "desarrollo espiritual", "centro de investigación"],
  authors: [{ name: "CIDE" }],
  openGraph: {
    title: "CIDE — Centro de Investigación para el Desarrollo Espiritual",
    description: "Conocimiento al servicio de la vida espiritual en el planeta.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${scalaSans.variable} ${sevenSeconds.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
