
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
    { id: 1, icon: <Trophy size={24} />, value: "1", label: "Paralympic Gold" },
    { id: 2, icon: <Award size={24} />, value: "9", label: "Table Tennis Championships" },
    { id: 3, icon: <Clock size={24} />, value: "20+", label: "Years in Table Tennis" },
    { id: 4, icon: <Users size={24} />, value: "100K+", label: "Lives Inspired" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative h-full">
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-yellow-200 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=687&auto=format&fit=crop" 
                alt="Sandra Paović" 
                className="relative z-10 rounded-lg object-cover h-full w-full max-h-[600px] reveal-on-scroll"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20 reveal-on-scroll [animation-delay:400ms] border border-yellow-100">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="flex justify-center text-yellow-600 mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-yellow-900">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium uppercase tracking-wider mb-6 reveal-on-scroll">
              About Sandra
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6 reveal-on-scroll [animation-delay:200ms]">
              From Table Tennis Champion to Paralympic Gold Medalist
            </h2>
            
            <div className="space-y-4 mb-8 reveal-on-scroll [animation-delay:300ms]">
              <p className="text-muted-foreground">
                Sandra Paović is a Croatian table tennis player and Paralympic champion. Before her accident in 2009, she was a highly successful table tennis player, competing at the highest levels and winning multiple championships throughout her career.
              </p>
              
              <p className="text-muted-foreground">
                Following a near-fatal bus accident that left her with serious spinal injuries, doctors told Sandra she might never walk again. Despite the devastating prognosis, she channeled her competitive spirit into rehabilitation and eventually returned to table tennis as a Paralympic athlete.
              </p>
              
              <p className="text-muted-foreground">
                Her journey reached its pinnacle when she won the gold medal at the 2016 Rio Paralympic Games, completing one of the most remarkable comebacks in sports history. Today, Sandra combines her unique perspective as both an able-bodied champion and Paralympic gold medalist to deliver powerful talks on resilience, adaptation, and finding strength in adversity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 reveal-on-scroll [animation-delay:400ms]">
              {stats.slice(2, 4).map((stat) => (
                <div key={stat.id} className="bg-yellow-50 rounded-lg p-5 border border-yellow-100">
                  <div className="flex items-center text-yellow-600 mb-3">
                    {stat.icon}
                    <span className="text-2xl font-bold ml-2 text-yellow-900">{stat.value}</span>
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
