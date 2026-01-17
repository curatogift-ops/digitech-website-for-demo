"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    service: "PAN Card Services",
    rating: 5,
    text: "Excellent service! Got my PAN card within 10 days. The team was very helpful and guided me through the entire process. Highly recommended!",
    avatar: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    service: "Passport Application",
    rating: 5,
    text: "Digiserve made my passport application process so smooth. They handled all the documentation and I received my passport without any hassle.",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore",
    service: "GST Registration",
    rating: 5,
    text: "Professional and reliable service for GST registration. The team is knowledgeable and responds quickly to queries. Great experience overall!",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Sunita Verma",
    location: "Jaipur",
    service: "Driving License",
    rating: 5,
    text: "Got my driving license renewed without any issues. The staff was courteous and the process was completed faster than expected. Thank you!",
    avatar: "SV",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Chennai",
    service: "Legal Documents",
    rating: 5,
    text: "Needed help with rental agreement and affidavit. Digiserve provided excellent legal documentation services. Very satisfied with their work.",
    avatar: "VS",
  },
  {
    id: 6,
    name: "Meera Reddy",
    location: "Hyderabad",
    service: "Investment Services - SIP",
    rating: 5,
    text: "Started my investment journey with Laprrk Associates through SIP. Their financial advisors explained everything clearly and helped me choose the right mutual funds. Seeing great returns!",
    avatar: "MR",
  },
  {
    id: 7,
    name: "Karan Mehta",
    location: "Pune",
    service: "Health Insurance",
    rating: 5,
    text: "Got comprehensive health insurance for my entire family at competitive rates. The team explained all policy details thoroughly and the claim process was seamless when needed.",
    avatar: "KM",
  },
  {
    id: 8,
    name: "Anjali Gupta",
    location: "Noida",
    service: "Home Loan",
    rating: 5,
    text: "Laprrk Associates helped me get my home loan approved within a week! They handled all documentation and got me the best interest rate. Very professional service!",
    avatar: "AG",
  },
  {
    id: 9,
    name: "Deepak Joshi",
    location: "Gurgaon",
    service: "Mutual Funds Investment",
    rating: 5,
    text: "Amazing financial advisory service! They created a customized investment portfolio based on my goals. Regular updates and transparent communication. Highly recommended for investments!",
    avatar: "DJ",
  },
  {
    id: 10,
    name: "Neha Kapoor",
    location: "Greater Noida",
    service: "Motor Insurance",
    rating: 5,
    text: "Renewed my car insurance with great coverage at lower premium. The team compared multiple options and helped me choose the best policy. Quick and hassle-free service!",
    avatar: "NK",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with Digiserve.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12 overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
