
import React, { useEffect, useRef } from "react";
import { Trophy, Award, Clock, Users } from "lucide-react";

const AboutSection = () => {
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

  const stats = [
    { id: 1, icon: <Trophy size={24} />, value: "4", label: "Olympic Medals" },
    { id: 2, icon: <Award size={24} />, value: "12", label: "World Championships" },
    { id: 3, icon: <Clock size={24} />, value: "15+", label: "Years of Experience" },
    { id: 4, icon: <Users size={24} />, value: "250K+", label: "Lives Impacted" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-muted rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=687&auto=format&fit=crop" 
                alt="Alexandra Coleman" 
                className="relative z-10 rounded-lg object-cover h-full w-full max-h-[600px] reveal-on-scroll"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20 reveal-on-scroll [animation-delay:400ms]">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="flex justify-center text-primary mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium uppercase tracking-wider mb-6 reveal-on-scroll">
              About Alexandra
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 reveal-on-scroll [animation-delay:200ms]">
              From Olympic Champion to Inspirational Speaker
            </h2>
            
            <div className="space-y-4 mb-8 reveal-on-scroll [animation-delay:300ms]">
              <p className="text-muted-foreground">
                Alexandra Coleman is an Olympic gold medalist, world champion, and one of the most decorated athletes in her sport. Throughout her 15-year career, she has broken multiple world records and redefined what's possible in competitive athletics.
              </p>
              
              <p className="text-muted-foreground">
                After overcoming a career-threatening injury to make an incredible comeback at the Olympics, Alexandra discovered her passion for helping others develop the mental resilience needed to overcome their own challenges.
              </p>
              
              <p className="text-muted-foreground">
                Today, she combines her elite athletic experience with extensive research on peak performance to deliver transformative keynotes and workshops. Her recently published book, "Champion Mindset," has become a bestseller, praised for its practical approach to building resilience and achieving excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal-on-scroll [animation-delay:400ms]">
              {stats.slice(2, 4).map((stat) => (
                <div key={stat.id} className="bg-gray-50 rounded-lg p-5">
                  <div className="flex items-center text-primary mb-3">
                    {stat.icon}
                    <span className="text-2xl font-bold ml-2">{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
