import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk, JetBrains_Mono, Syne, Exo_2, Ubuntu_Mono, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body suppressHydrationWarning className={`${syne.variable} ${exo2.variable} ${spaceGrotesk.variable} ${ubuntuMono.variable} ${jetbrainsMono.variable} ${harmond.variable} ${centrion.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

