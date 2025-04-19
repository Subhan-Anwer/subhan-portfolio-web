import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Hero />
      <Stack />
    </>
  );
}


export const metadata: Metadata = {
  title: "Subhan Portfolio",
  description: "Developed by Subhan Sheikh with nextjs",
};