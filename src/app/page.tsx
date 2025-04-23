export const metadata: Metadata = {
  title: "Subhan Anwer | Frontend & Website Developer",
  description:
    "I&quot;m Subhan Anwer, a skilled Next.js and frontend developer offering freelance website development services to clients and tech companies.",
  keywords: [
    "Subhan Anwer",
    "frontend developer",
    "website development",
    "freelance web developer",
    "Next.js developer",
    "portfolio"
  ],
  authors: [{ name: "Subhan Anwer" }],
  openGraph: {
    title: "Subhan Anwer | Freelance Frontend Developer",
    description:
      "Expert in responsive, SEO-optimized websites using Next.js, Tailwind CSS and Typescript.",
    url: "https://subhan-portfolio.vercel.app/",
    siteName: "Subhan Anwer Portfolio",
    images: [
      {
        url: "/profilepic.png", // 🔁 Ensure this exists in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhan Anwer | Website Developer",
    description:
      "Looking to hire a freelance frontend developer? Let&quot;s build something amazing together.",
    images: ["/og-image.jpg"],
  },
};



import Hero from "@/components/Hero";
import CodeStats from "@/components/CodeStats";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack";
import { Metadata } from "next";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <CodeStats />
      <Services />
      <Contact />
    </>
  );
}

