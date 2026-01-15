import { Layout } from "@/components/layout";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryData: Record<string, { title: string; description: string; services: { name: string; timeline: string; docs: string[] }[] }> = {
  "insurance": { title: "Insurance Services", description: "Comprehensive insurance coverage for all your needs", services: [
    { name: "Life/Term Insurance", timeline: "Standard", docs: ["Identity Proof", "Address Proof", "Photo"] },
    { name: "Motor/Car Insurance", timeline: "Instant", docs: ["RC Copy", "Previous Policy"] },
    { name: "Health Insurance", timeline: "Instant", docs: ["Identity Proof", "Age Proof"] },
    { name: "Travel Insurance", timeline: "Instant", docs: ["Passport", "Ticket Details"] },
    { name: "Home Insurance", timeline: "Standard", docs: ["Property Details", "Identity Proof"] },
    { name: "Commercial Insurance", timeline: "Custom", docs: ["Business Details", "Asset Details"] },
    { name: "Marine Insurance", timeline: "Custom", docs: ["Invoice", "Transport Details"] },
  ]},
  "investment": { title: "Investment Services", description: "Grow your wealth with our expert investment solutions", services: [
    { name: "Financial Advisory & Planning", timeline: "Consultation", docs: ["Income Details", "KYC"] },
    { name: "Mutual Fund/SIP", timeline: "Instant", docs: ["PAN", "Aadhaar", "Bank Details"] },
    { name: "ELSS Funds", timeline: "Instant", docs: ["PAN", "Aadhaar", "Bank Details"] },
    { name: "Investment Consulting", timeline: "Consultation", docs: ["Portfolio Details"] },
    { name: "Company FD's", timeline: "Standard", docs: ["KYC Documents", "Cheque"] },
    { name: "RBI Bonds/PSU Bonds", timeline: "Standard", docs: ["Demat Account", "KYC"] },
    { name: "Capital Gain Bonds", timeline: "Standard", docs: ["Property Sale Deed", "KYC"] },
  ]},
  "loans": { title: "Loan Services", description: "Tailored loan solutions for your financial needs", services: [
    { name: "Personal Loan", timeline: "Standard", docs: ["ID Proof", "Address Proof", "Income Proof"] },
    { name: "Business Loan", timeline: "Standard", docs: ["Business Proof", "ITR", "Bank Statements"] },
    { name: "Home Loan", timeline: "Standard", docs: ["Property Documents", "Income Proof", "KYC"] },
    { name: "Loan Against Property", timeline: "Standard", docs: ["Property Documents", "KYC"] },
    { name: "Car Loan", timeline: "Standard", docs: ["Income Proof", "KYC", "Vehicle Quotation"] },
    { name: "Education Loan", timeline: "Standard", docs: ["Admission Letter", "KYC", "Income Proof"] },
  ]},
  "value-added": { title: "Value Added Services", description: "Essential government and legal document services", services: [
    { name: "Driving License", timeline: "Standard", docs: ["Age Proof", "Address Proof", "Photos"] },
    { name: "RTO Works", timeline: "Standard", docs: ["RC", "Insurance", "Pollution Cert"] },
    { name: "Passport", timeline: "Standard", docs: ["Aadhaar", "Pan", "Birth Certificate"] },
    { name: "Pan Card", timeline: "7-10 Days", docs: ["Aadhaar", "Photo"] },
    { name: "Birth/Marriage Certificate", timeline: "Standard", docs: ["Hospital Records", "Affidavit"] },
    { name: "Death Certificate", timeline: "Standard", docs: ["Medical Report", "ID Proof"] },
    { name: "Domicile/Income Certificate", timeline: "Standard", docs: ["Residence Proof", "Income Proof"] },
    { name: "Jeevan Praman Certificate", timeline: "Instant", docs: ["Aadhaar", "PPO Number"] },
    { name: "Police Verification", timeline: "Standard", docs: ["ID Proof", "Address Proof"] },
    { name: "Aadhaar Update", timeline: "3-7 Days", docs: ["Supporting Documents"] },
    { name: "Rent Agreement", timeline: "Same Day", docs: ["ID Proofs", "Property Details"] },
    { name: "Affidavit", timeline: "Same Day", docs: ["ID Proof", "Matter Details"] },
  ]},
};

const ServiceCategory = () => {
  const { category } = useParams();
  const data = categoryData[category || ""] || { title: "Services", description: "", services: [] };

  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">{data.description}</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((service, i) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />Timeline: {service.timeline}
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2 flex items-center gap-2"><FileText className="w-4 h-4" />Required Documents:</p>
                  <ul className="space-y-1">{service.docs.map((doc) => <li key={doc} className="text-sm text-muted-foreground flex items-center gap-2"><CheckCircle className="w-3 h-3 text-accent" />{doc}</li>)}</ul>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-digiserve-red-hover"><Link to="/contact">Enquire Now <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCategory;