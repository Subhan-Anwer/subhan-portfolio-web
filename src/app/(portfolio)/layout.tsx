import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "@/app/globals.css";
import Navbar from "@/components/NavBar";
import { SanityLive } from "@/sanity/lib/live";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Subhan Anwer Portfolio",
  description: "Developed by Subhan Anwer with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black`}>
        <main>
          <Navbar />
          {children}
        </main>
        <SanityLive />
      </body>
    </html>
  );
}
