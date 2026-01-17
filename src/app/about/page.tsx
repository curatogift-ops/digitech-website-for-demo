"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, Target, Heart } from "lucide-react";

const About = () => (
  <>
    <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Laprrk Associates</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Your trusted partner for financial and wealth solutions</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">Laprrk Associates was founded with a mission to provide comprehensive financial and documentation services under one roof.</p>
            <p className="text-muted-foreground">We specialize in maximizing your returns with zero consulting fees, offering expert guidance in Insurance, Investments, and essential government services.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[{ icon: Shield, label: "Trusted Partner" }, { icon: Clock, label: "Expert Advice" }, { icon: Users, label: "Happy Families" }, { icon: Award, label: "Wealth Solutions" }].map((item) => (
              <div key={item.label} className="bg-card rounded-xl p-6 border border-border text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/50 rounded-xl p-8">
            <Target className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">To be the one-stop solution for all your financial needs, ensuring your wealth grows while taking care of your essential documentation.</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-8">
            <Heart className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-muted-foreground">Integrity, Zero Consulting Fees, Customer-Centricity, and Transparency in all our financial advisory and services.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
