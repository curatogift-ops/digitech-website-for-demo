"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const posts = [
  { 
    id: 1, 
    title: "Smart Investment Strategies: SIP vs Lump Sum - Which is Right for You?", 
    date: "Jan 15, 2026", 
    category: "Investment",
    content: "Investing wisely is crucial for financial growth. A Systematic Investment Plan (SIP) allows you to invest small amounts regularly in mutual funds, reducing market timing risk through rupee cost averaging. Starting with just ₹500 per month, you can build a diversified portfolio. ELSS (Equity Linked Savings Scheme) offers dual benefits of wealth creation and tax savings under Section 80C. At Laprrk Associates, our financial advisors help you choose the right funds based on your risk appetite and financial goals."
  },
  { 
    id: 2, 
    title: "Complete Insurance Guide: Protecting Your Family's Financial Future", 
    date: "Jan 10, 2026", 
    category: "Insurance",
    content: "Insurance is not just a safety net; it's a promise of financial security. Life insurance ensures your family's financial stability in your absence, while health insurance protects against rising medical costs. Motor insurance is mandatory and protects you from accident liabilities. At Laprrk Associates, we offer comprehensive insurance solutions including Life, Motor, Health, Travel, Home, and Commercial Insurance. Our experts analyze your needs and recommend policies with optimal coverage at competitive premiums. We also provide complete claim assistance to ensure quick settlements."
  },
  { 
    id: 3, 
    title: "Home Loan Made Simple: Your Complete Guide to Property Financing", 
    date: "Jan 5, 2026", 
    category: "Loans",
    content: "Buying your dream home becomes easier with the right home loan. Understanding the loan process is crucial - from checking eligibility to documentation and approval. Banks consider your credit score, income stability, and existing liabilities. At Laprrk Associates, we help you compare offers from multiple lenders to get the best interest rates. We assist with complete documentation including income proof, property papers, and bank statements. Our loan experts handle the entire process from application to disbursement, ensuring you get favorable terms. We also help with Personal Loans, Business Loans, Car Loans, Education Loans, and Loan Against Property."
  },
];

const Blog = () => (
  <>
    <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Resources</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Helpful guides and insights on our services</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="bg-card rounded-xl border border-border overflow-hidden shadow-md"
            >
              <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />{post.date}
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{post.category}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{post.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
