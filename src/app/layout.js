import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Praise Media Productions | Live Telecasting Services",
  description: "Professional live telecasts of weddings, funerals, and special events. High-quality broadcasting with Praise Media Productions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
