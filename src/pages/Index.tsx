import { Layout } from "@/components/layout";
import { 
  HeroSection, 
  ServicesSection, 
  TrustSection, 
  TestimonialsSection,
  CTASection 
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
