import Hero from "@/components/Hero";
import CodeStats from "@/components/CodeStats";
import LogoAnimation from "@/components/LogoAnimation";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack";
import { Metadata } from "next";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <LogoAnimation />
      <Portfolio />
      <CodeStats />
      <Services />
    </>
  );
}


export const metadata: Metadata = {
  title: "Subhan Portfolio",
  description: "Developed by Subhan Sheikh with nextjs",
};