import { Layout } from "@/components/layout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the captcha verification");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Add configuration fields
    const payload = {
      ...data,
      _subject: "New Contact Form Submission - Laprrk Associates",
      _captcha: "false",
      _template: "table",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/laprrkassociates@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-4">
                <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                
                <Input name="name" placeholder="Full Name *" required disabled={isSubmitting} />
                <Input name="phone" placeholder="Phone Number *" required disabled={isSubmitting} />
                <Input type="email" name="email" placeholder="Email Address *" required disabled={isSubmitting} />
                <Input name="service" placeholder="Service (e.g., Insurance, Investment, Loan, Value Added)" disabled={isSubmitting} />
                <Textarea name="message" placeholder="Your Message" rows={4} disabled={isSubmitting} />
                
                <div className="flex justify-center sm:justify-start">
                  <ReCAPTCHA
                    sitekey="6LeLRkwsAAAAANQgppPLSXM8h76HMZZi0wjDPpRc"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-digiserve-red-hover" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center space-y-4 pt-4">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-2xl font-bold">Thank You!</DialogTitle>
            <DialogDescription className="text-base text-center max-w-[350px]">
              Thank you for contacting with us, Our representative will contact you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center p-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Contact;