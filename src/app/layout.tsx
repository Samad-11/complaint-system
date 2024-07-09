import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["200", "300", "500", "700", "900"], preload: false })
const poppins = Poppins({ weight: ["200", "300", "500", "600", "700", "800", "900"], subsets: ['latin'], variable: "--font-poppins" })


export const metadata: Metadata = {
  title: "Complaint Box",
  description: "A online system to register your complaints",
  authors: { name: "Abdus Samad" },
  category: "SYSTEM",
  creator: "Abdus Samad",

  
  manifest: "/manifest.json",

  icons: [
    {
      rel: "icon", url: "/icons/android-chrome-192x192.png"
    },
    {
      rel: "apple-touch-icon", url: "/icon/apple-touch-icon.png"
    }
  ],
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
