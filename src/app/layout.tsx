import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Subhan Portfolio",
  description: "Developed by Subhan Sheikh with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
