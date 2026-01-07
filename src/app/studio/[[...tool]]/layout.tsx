import type { Metadata } from "next";
import "@/app/globals.css";


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
      <body
      >
        {children}
      </body>
    </html>
  );
}
