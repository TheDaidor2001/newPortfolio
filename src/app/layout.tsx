import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Bebas_Neue } from "@next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Castillo PortFolio",
  description: "Daniel castillo, Front-End developer ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-color text-selection-disable h-screen">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
