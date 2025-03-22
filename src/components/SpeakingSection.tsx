
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const SpeakingSection = () => {
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

  const upcomingEvents = [
    {
      id: 1,
      title: "Overcoming Adversity: The Champion's Mindset",
      date: "June 15, 2023",
      location: "Paralympic Sports Summit, Paris",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "From Tragedy to Triumph Workshop",
      date: "July 8, 2023",
      location: "International Table Tennis Federation Conference, Zagreb",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Redefining Success After Adversity",
      date: "August 22, 2023",
      location: "Women in Sports Conference, London",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <section id="speaking" className="py-24 md:py-32 bg-yellow-50" ref={sectionRef}>
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium uppercase tracking-wider mb-6 reveal-on-scroll">
            Inspirational Talks
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 reveal-on-scroll [animation-delay:200ms]">
            Finding Strength Through Adversity
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto reveal-on-scroll [animation-delay:300ms]">
            Sandra delivers powerful keynotes and workshops that inspire audiences to embrace resilience and find their inner strength. Drawing from her journey from table tennis champion to Paralympic gold medalist after a life-altering accident, she shares practical insights on overcoming obstacles and achieving greatness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 reveal-on-scroll border border-yellow-100"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={14} className="mr-1 text-yellow-600" />
                  <span className="mr-4">{event.date}</span>
                  <MapPin size={14} className="mr-1 text-yellow-600" />
                  <span>{event.location.split(',')[1]}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {event.location}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-yellow-700 hover-link"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center reveal-on-scroll [animation-delay:800ms]">
          <h3 className="text-2xl font-display font-semibold mb-6">
            Ready to inspire your team or audience?
          </h3>
          
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 font-medium shadow-sm hover:shadow-md transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-yellow-950"
          >
            Book Sandra for Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
