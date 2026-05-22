import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chirping Sparrows — Pre-School with Day Care | Igniting Young Minds",
  description:
    "Chirping Sparrows is a flourishing pre-primary education center for children aged 2 to 5 — child-centric, fun-filled learning in Greater Noida West.",
  keywords: [
    "Chirping Sparrows",
    "Preschool",
    "Day Care",
    "Greater Noida West",
    "Noida Extension",
    "Play School",
    "Kids Gym",
  ],
  openGraph: {
    title: "Chirping Sparrows — Igniting Young Minds",
    description:
      "Pre-school + day care for children 2–5 in Greater Noida West. Trained teachers, interactive learning, art, music, sports.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
