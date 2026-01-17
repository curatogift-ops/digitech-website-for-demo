"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, Shield, TrendingUp, CheckCircle2, ArrowRight, Check, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { 
    icon: Shield, 
    title: "Insurance Services", 
    description: "Comprehensive coverage for all your needs", 
    href: "/services/insurance", 
    color: "bg-blue-500/10 text-blue-600",
    items: [
      "Life / Term Insurance",
      "Motor / Car Insurance",
      "Health Insurance",
      "Travel Insurance",
      "Home Insurance",
      "Commercial Insurance",
      "Marine Insurance"
    ]
  },
  { 
    icon: TrendingUp, 
    title: "Investment Services", 
    description: "Grow your wealth with expert guidance", 
    href: "/services/investment", 
    color: "bg-yellow-500/10 text-yellow-600",
    items: [
      "Financial Advisory & Planning",
      "Mutual Funds / SIP",
      "ELSS Funds",
      "Investment Consulting",
      "Company Fixed Deposits (FDs)",
      "RBI Bonds / PSU Bonds",
      "Capital Gain Bonds (Under Section 54EC)"
    ]
  },
  { 
    icon: FileText, 
    title: "Value Added Services", 
    description: "Essential documentation services made easy", 
    href: "/services/value-added", 
    color: "bg-purple-500/10 text-purple-600",
    items: [
      "Driving License",
      "RTO Works",
      "Passport Services",
      "PAN Card",
      "Birth Certificate",
      "Marriage Certificate",
      "Death Certificate",
      "Domicile Certificate",
      "Income Certificate",
      "Jeevan Praman Certificate",
      "Police Verification",
      "Aadhaar Update",
      "Affidavit"
    ]
  },
  { 
    icon: Banknote, 
    title: "Loan Services", 
    description: "Tailored loan solutions for your financial needs", 
    href: "/services/loans", 
    color: "bg-green-600/10 text-green-600",
    items: [
      "Personal Loan",
      "Business Loan",
      "Home Loan",
      "Loan Against Property",
      "Car Loan",
      "Education Loan"
    ]
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">Comprehensive digital solutions for all your documentation needs</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <div className="group flex flex-col w-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="p-6 pb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} transition-transform group-hover:scale-110 duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 min-w-4 min-h-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto p-6 pt-0 border-t border-border/50 bg-muted/30">
                  <Link href={service.href} className="inline-flex items-center justify-center w-full py-3 mt-4 text-sm font-semibold text-primary bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:translate-y-[-2px]">
                    Explore Services <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">We prioritize your financial growth and simplify your documentation process.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg flex items-start gap-6"
            >
              <div className="bg-green-500/10 p-4 rounded-xl">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Maximize Your Returns</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our expert strategies are designed to help you get the best possible returns on your investments, ensuring your wealth grows steadily over time.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg flex items-start gap-6"
            >
              <div className="bg-blue-500/10 p-4 rounded-xl">
                <CheckCircle2 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">No Consulting Fees</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in transparent and accessible financial advice. That's why we charge absolutely zero consulting fees for our expert guidance.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
             <Button asChild size="lg" className="bg-accent hover:bg-digiserve-red-hover text-accent-foreground px-8 shadow-xl shadow-accent/20">
               <Link href="/contact">Generic Contact</Link>
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}
