
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Photo Kronika PZS1 Kościerzyna",
  description: "Kronika fotograficzna PZS1 Kościerzyna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="flex min-h-screen flex-col bg-slate-950 text-white">

        <Navbar />

        <div className="relative flex-1 overflow-hidden bg-slate-950">

          {/* Poświata – prawy górny róg */}
          <div className="pointer-events-none absolute -right-32 -top-32 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Poświata – lewy dolny róg */}
          <div className="pointer-events-none absolute -bottom-32 -left-32 z-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

          {/* Zawartość stron */}
          <div className="relative z-10">
            {children}
          </div>

        </div>

        <Footer />

      </body>
    </html>
  );
}

