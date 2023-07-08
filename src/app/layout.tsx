"use client";

import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "styled-components";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Mi Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
