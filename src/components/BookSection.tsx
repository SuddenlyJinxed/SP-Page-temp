
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Star } from "lucide-react";

const BookSection = () => {
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

  return (
    <section id="book" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium uppercase tracking-wider mb-6 reveal-on-scroll">
                New Release
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 reveal-on-scroll [animation-delay:200ms]">
                Volim život - I Love Life
              </h2>
              
              <div className="flex items-center mb-6 reveal-on-scroll [animation-delay:300ms]">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">94 reviews</span>
              </div>
              
              <p className="text-muted-foreground mb-6 reveal-on-scroll [animation-delay:400ms]">
                In her powerful memoir, Paralympic gold medalist Sandra Paović shares her extraordinary journey from being a rising table tennis star to suffering a life-changing accident, and her incredible comeback to become a Paralympic champion. This inspiring story reveals the mental strength and determination that helped her redefine success and find purpose after adversity.
              </p>
              
              <div className="flex items-start mb-8 reveal-on-scroll [animation-delay:500ms]">
                <blockquote className="border-l-2 border-yellow-500 pl-4 italic text-muted-foreground">
                  "A testament to the human spirit. Sandra's journey shows that with determination and resilience, we can overcome any obstacle."
                  <footer className="text-sm mt-2 font-medium text-foreground">
                    — International Paralympic Committee
                  </footer>
                </blockquote>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 reveal-on-scroll [animation-delay:600ms]">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
                >
                  Get Your Copy
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 font-medium text-sm border-yellow-300 text-yellow-900 hover:bg-yellow-50"
                >
                  <BookOpen size={16} className="mr-2" />
                  Read Sample
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 reveal-on-scroll [animation-delay:500ms]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-100 to-white rounded-xl rotate-3 transform"></div>
              <img 
                src="/lovable-uploads/109aa9af-a1aa-44e6-aab8-787bb2b75d3d.png" 
                alt="Volim život Book Cover" 
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-md border border-yellow-200">
                <span className="text-lg font-bold text-yellow-900">20€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
