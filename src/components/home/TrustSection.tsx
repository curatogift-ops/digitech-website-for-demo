import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, HeadphonesIcon, CheckCircle } from "lucide-react";

const trustIndicators = [
  {
    icon: Shield,
    number: "100%",
    label: "Secure & Verified",
    description: "All processes are safe and government-compliant",
  },
  {
    icon: Clock,
    number: "24-48",
    label: "Hours Turnaround",
    description: "Quick processing for most services",
  },
  {
    icon: Users,
    number: "50,000+",
    label: "Happy Customers",
    description: "Trusted by thousands across India",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
    description: "Decade of reliable service",
  },
];

const features = [
  "Government authorized service center",
  "Transparent pricing with no hidden charges",
  "Expert guidance throughout the process",
  "Document verification assistance",
  "Status tracking for all applications",
  "Dedicated customer support",
];

export function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands, Powered by Expertise
            </h2>
            <p className="text-muted-foreground mb-8">
              Laprrk Associates brings expert financial knowledge and documentation services 
              together, helping you secure your future with confidence and ease.
            </p>

            {/* Features List */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Support Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <HeadphonesIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">24/7 Customer Support</p>
                <p className="text-sm text-muted-foreground">We're here whenever you need us</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {item.number}
                </div>
                <div className="font-medium text-foreground mb-1">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
