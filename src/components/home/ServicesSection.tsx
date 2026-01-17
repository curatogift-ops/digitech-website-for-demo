"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  TrendingUp,
  Banknote,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Shield,
    title: "Insurance Services",
    description: "Life, Motor, Health, Travel, Home, Commercial & Marine Insurance.",
    href: "/services/insurance",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Services",
    description: "Financial Advisory, Mutual Funds, SIP, ELSS, Bonds & Consulting.",
    href: "/services/investment",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Banknote,
    title: "Loan Services",
    description: "Personal, Business, Home, Car, Education & Loan Against Property.",
    href: "/services/loans",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: FileText,
    title: "Value Added Services",
    description: "Driving License, Passport, PAN Card, Certificates, Agreements & More.",
    href: "/services/value-added",
    color: "bg-purple-500/10 text-purple-600",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground">
            From essential government documents to business services, we've got you covered 
            with our wide range of professional services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-4", service.color)}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
