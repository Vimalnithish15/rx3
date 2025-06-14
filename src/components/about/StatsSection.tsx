
import { Award, Users, Building, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Building,
      number: "2,500+",
      label: "Projects Completed",
      description: "Successful installations across residential and commercial sectors"
    },
    {
      icon: Clock,
      number: "25+",
      label: "Years of Experience",
      description: "Decades of expertise in concrete manufacturing and innovation"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Building lasting relationships with contractors and developers"
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for quality excellence and innovation"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-concrete-charcoal mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
            These numbers reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-8 rounded-2xl bg-gradient-to-br from-concrete-light to-white border border-concrete-light hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <stat.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="text-4xl font-bold text-concrete-charcoal mb-2 transition-all duration-300 group-hover:text-primary group-hover:scale-110">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-concrete-charcoal mb-3 transition-colors duration-300 group-hover:text-primary">
                {stat.label}
              </h3>
              <p className="text-concrete-gray leading-relaxed transition-colors duration-300 group-hover:text-concrete-charcoal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
