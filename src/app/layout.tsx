import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sathishkumar S | DevOps Support Engineer",
  description: "DevOps Support Engineer specializing in Kubernetes, Azure, Docker, CI/CD automation, monitoring and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased min-h-screen relative selection:bg-primary/30">
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10 flex flex-col pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
