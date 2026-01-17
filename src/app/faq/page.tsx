"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  // Investment Services FAQs
  { q: "What investment options do you offer?", a: "We offer a comprehensive range of investment options including Mutual Funds, SIP (Systematic Investment Plans), ELSS (Equity Linked Savings Scheme), Bonds, and other market-linked instruments. Our financial advisors help you choose the best investment strategy based on your goals and risk appetite." },
  { q: "How do I start a SIP with Laprrk Associates?", a: "Starting a SIP is simple! Contact us via phone or WhatsApp, and our investment advisors will guide you through the process. You can start with as low as ₹500 per month and choose from various mutual fund schemes that align with your financial goals." },
  { q: "What is ELSS and how does it help in tax saving?", a: "ELSS (Equity Linked Savings Scheme) is a tax-saving mutual fund with a lock-in period of 3 years. Investments up to ₹1.5 lakh per year are eligible for tax deduction under Section 80C of the Income Tax Act. It offers dual benefits of wealth creation and tax savings." },
  
  // Insurance Services FAQs
  { q: "What types of insurance do you provide?", a: "We offer comprehensive insurance solutions including Life Insurance, Motor Insurance, Health Insurance, Travel Insurance, Home Insurance, Commercial Insurance, and Marine Insurance. Our experts help you choose the right coverage for your needs." },
  { q: "How can I claim my insurance?", a: "Our team provides complete claim assistance. Contact us immediately after an incident, and we'll guide you through the claim process, help with documentation, and ensure quick settlement from the insurance company." },
  { q: "What documents are required for health insurance?", a: "For health insurance, you typically need ID proof (Aadhaar/PAN), address proof, age proof, passport-size photographs, and medical reports if applicable. We simplify the entire process and help you with all documentation requirements." },
  
  // Loan Services FAQs
  { q: "What types of loans do you help with?", a: "We assist with Personal Loans, Business Loans, Home Loans, Loan Against Property, Car Loans, and Education Loans. Our experts help you find the best loan options from various banks and NBFCs with competitive interest rates." },
  { q: "What is the loan approval process?", a: "The loan approval process involves document verification, credit score check, and approval from the lender. We handle the entire process from application to disbursement, ensuring you get the best terms. Approval time varies from 2-7 days depending on the loan type." },
  { q: "What documents are needed for a home loan?", a: "For a home loan, you need ID proof, address proof, income proof (salary slips/ITR), bank statements, property documents, and photographs. We help you prepare all documents and liaise with banks for quick approval." },
  
  // General FAQs
  { q: "What documents do I need for PAN card application?", a: "You need proof of identity (Aadhaar, Passport, Voter ID), proof of address, and a passport-size photograph." },
  { q: "How long does it take to get a passport?", a: "Normal processing takes 30-45 days. Tatkal service can deliver within 7-14 days for urgent requirements." },
  { q: "Can you help with Aadhaar card updates?", a: "Yes, we assist with name, address, mobile number, and biometric updates for Aadhaar cards." },
  { q: "What is the process for driving license renewal?", a: "We handle the complete process including form filling, document verification, and appointment booking at RTO." },
  { q: "Do you provide GST registration services?", a: "Yes, we offer complete GST registration, filing, and compliance services for businesses of all sizes." },
  { q: "How can I track my application status?", a: "You can contact us via phone or WhatsApp, and we'll provide real-time updates on your application status." },
  { q: "What are your service charges?", a: "Our charges vary by service. Contact us for a detailed quote - we guarantee transparent pricing with no hidden fees." },
  { q: "Do you offer home pickup for documents?", a: "Yes, we offer document pickup services in select areas. Please contact us to check availability in your location." },
];

const FAQ = () => (
  <>
    <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Find answers to common questions about our services</p>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </>
);

export default FAQ;
