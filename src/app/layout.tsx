import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Bebas_Neue } from "@next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const bebas = Bebas_Neue({ subsets: ["latin-ext"], weight: ["400"] });

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
