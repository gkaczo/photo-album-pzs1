import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"
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
      <body className="bg-slate-50 text-slate-900">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}