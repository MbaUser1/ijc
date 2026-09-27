import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Impact Jeune Cameroun",
    template: "%s | Impact Jeune Cameroun",
  },
  description:
    "Impact Jeune Cameroun — une communauté engagée pour l'autonomisation, le développement des compétences et l'impact des jeunes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${sora.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
