
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutHero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-gradient-to-br from-concrete-light to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 animate-pulse">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-concrete-charcoal mb-6 leading-tight">
            Building Excellence for
            <span className="text-primary block animate-slide-in-right">Over 25 Years</span>
          </h1>
          
          <p className="text-xl text-concrete-gray mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            At RX3 Pro, we've been at the forefront of concrete manufacturing innovation, 
            delivering premium precast solutions that stand the test of time. Our commitment to 
            quality, sustainability, and customer satisfaction drives everything we do.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-concrete-light transition-all duration-500 hover:bg-white hover:shadow-xl hover:scale-105 group" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-semibold text-concrete-charcoal mb-4 group-hover:text-primary transition-colors duration-300">Our Mission</h2>
            <p className="text-lg text-concrete-gray leading-relaxed">
              To revolutionize the construction industry by providing innovative, high-quality 
              concrete products that exceed expectations while maintaining environmental responsibility 
              and fostering long-term partnerships with our clients.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
            style={{ animationDelay: '0.9s' }}
          >
            Discover Our Story
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
