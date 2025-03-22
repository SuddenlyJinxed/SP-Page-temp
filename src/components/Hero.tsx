
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-yellow-50"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(251,191,36,0.05)_0%,rgba(251,191,36,0.1)_100%)]" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center z-10 reveal-on-scroll">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in [animation-delay:200ms]">
          Paralympic Champion · Author · Speaker
        </span>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in [animation-delay:400ms]">
          Sandra <br /> Paović
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:600ms]">
          From table tennis champion to Paralympic gold medalist, sharing my story of resilience and determination through my new book and inspirational speeches.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in [animation-delay:800ms]">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            Get the Book
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 py-6 font-medium text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 border-yellow-400 text-yellow-900"
          >
            Book a Speech
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-fade-in [animation-delay:1200ms]">
        <button 
          onClick={scrollToNextSection}
          className="rounded-full w-10 h-10 flex items-center justify-center border border-yellow-300 hover:border-yellow-500 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="animate-bounce text-yellow-900" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
