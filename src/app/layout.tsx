import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["200", "300", "500", "700", "900"], preload: false })
const poppins = Poppins({ weight: ["200", "300", "500", "600", "700", "800", "900"], subsets: ['latin'], variable: "--font-poppins" })


export const metadata: Metadata = {
  title: "Complaint Box",
  description: "Web App for complaint",
  authors: { name: "Abdus Samad" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
