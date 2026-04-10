import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk, JetBrains_Mono, Nova_Square, Michroma, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const novaSquare = Nova_Square({
  weight: "400",
  variable: "--font-nova-square",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

/* ── Local Fonts ─────────────────────────────────────────────── */
const harmond = localFont({
  src: "../../public/fonts/Harmond-SemiBoldCondensed.otf",
  variable: "--font-harmond",
  display: "swap",
});

const centrion = localFont({
  src: "../../public/fonts/Centrion Variable.ttf",
  variable: "--font-centrion",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zyro '26 - Annual Robotics & Hardware Hackathon",
  description: "Zyro is the annual Robotics and Hardware hackathon of Kalyani Government Engineering College. Join us for an intensive 24-hour event dedicated to crafting the future at the intersection of electronics and sustainable technology.",
  keywords: ["zyro", "hackathon", "robotics", "hardware", "kgec", "kalyani government engineering college", "innovation"],
  authors: [{ name: "Zyro Team" }],
  openGraph: {
    title: "Zyro '26 - Annual Robotics & Hardware Hackathon",
    description: "Join the premier 24-hour offline hardware and robotics hackathon at KGEC.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${novaSquare.variable} ${michroma.variable} ${hankenGrotesk.variable} ${harmond.variable} ${centrion.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

