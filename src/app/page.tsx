import Hero from "@/components/Hero";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}


export const metadata: Metadata = {
  title: "Subhan Portfolio",
  description: "Developed by Subhan Sheikh with nextjs",
};