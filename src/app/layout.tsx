import type { Metadata } from "next";
import { Inter, Orbitron, Space_Grotesk, JetBrains_Mono, Nova_Square, Michroma, Geist } from "next/font/google";
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
      <body suppressHydrationWarning className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${novaSquare.variable} ${michroma.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
