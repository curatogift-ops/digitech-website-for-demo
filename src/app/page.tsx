import { 
  HeroSection, 
  ServicesSection, 
  TrustSection, 
  TestimonialsSection,
  CTASection 
} from "@/components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laprrk Associates - Your Trusted Financial Partner",
  description: "One Stop Solution for all your Financial Needs. Insurance, Investments, Loans, and Value Added Services with zero consulting fees. Trusted by 10,000+ customers.",
  keywords: ["Insurance", "Investment", "Loans", "Financial Services", "Laprrk Associates"],
  openGraph: {
    title: "Laprrk Associates - Your Trusted Financial Partner",
    description: "Maximize Your Returns with Zero Consulting Fees",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
