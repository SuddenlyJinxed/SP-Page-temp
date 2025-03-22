
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      elements.current = Array.from(sectionRef.current.querySelectorAll(".reveal-on-scroll"));
      elements.current.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements.current.length) {
        elements.current.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "For inquiries about speaking engagements",
      contact: "sandra.paovic@gmail.com",
      link: "mailto:sandra.paovic@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      description: "For media and press",
      contact: "+385 098 1817 649",
      link: "tel:+385098181764"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Book Inquiries",
      description: "For bulk orders and signings",
      contact: "sandra.paovic@gmail.com",
      link: "mailto:sandra.paovic@gmail.com?subject=Book%20Inquiry"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium uppercase tracking-wider mb-6 reveal-on-scroll">
            Get in Touch
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 reveal-on-scroll [animation-delay:200ms]">
            Let's Connect
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal-on-scroll [animation-delay:300ms]">
            Interested in having Sandra speak at your event, ordering books in bulk, or media opportunities? Reach out using the form below or through our direct contact methods.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12 reveal-on-scroll [animation-delay:400ms]">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-primary mb-4">
                {method.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              
              <a 
                href={method.link}
                className="text-primary font-medium hover:underline"
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden reveal-on-scroll [animation-delay:600ms]">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="min-h-32" 
                    required 
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full rounded-full px-8 py-6 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <Check size={18} className="mr-2" />
                    Sent Successfully
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
