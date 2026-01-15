import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Get in touch with our team for any inquiries</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <a href="tel:9311407461" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium">Phone</p><p className="text-muted-foreground">9311407461 / 8800975636</p></div>
                </a>
                <a href="mailto:laprrkassociates@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium">Email</p><p className="text-muted-foreground">laprrkassociates@gmail.com</p></div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="font-medium">Location</p><p className="text-muted-foreground">FF-95, Gaur City Center, Near Gaur City, Greater Noida West, Uttar Pradesh - 201318</p></div>
                </div>
              </div>
              <a href="https://wa.me/919311407461" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20BD5A] transition-colors">
                <MessageCircle className="w-5 h-5" />Chat on WhatsApp
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form action="https://formsubmit.co/laprrkassociates@gmail.com" method="POST" className="bg-card rounded-xl p-8 border border-border space-y-4">
                <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Laprrk Associates" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <Input name="name" placeholder="Full Name *" required />
                <Input name="phone" placeholder="Phone Number *" required />
                <Input type="email" name="email" placeholder="Email Address *" required />
                <Input name="service" placeholder="Service (e.g., Insurance, Investment, Loan, Value Added)" />
                <Textarea name="message" placeholder="Your Message" rows={4} />
                <Button type="submit" className="w-full bg-accent hover:bg-digiserve-red-hover"><Send className="w-4 h-4 mr-2" />Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;