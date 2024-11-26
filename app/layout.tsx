import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsApp } from "@/components/WhatsApp";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colégio Veritas",
  description: "Desde 1979 a serviço da educação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
