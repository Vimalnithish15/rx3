
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" className="relative bg-gradient-to-br from-concrete-light via-white to-concrete-light min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:scale-105">
                <Check className="h-4 w-4 mr-2 transition-transform duration-200" />
                25+ Years of Excellence
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-concrete-charcoal leading-tight">
                Premium
                <span className="text-primary block animate-slide-in-right">Concrete Solutions</span>
                for Modern Construction
              </h1>
              
              <p className="text-lg text-concrete-gray leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
                From precast components to custom concrete products, RX3 delivers 
                exceptional quality that stands the test of time. Trust our expertise 
                for your next construction project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-concrete-charcoal text-concrete-charcoal hover:bg-concrete-charcoal hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-concrete-gray animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-concrete-charcoal transition-all duration-300 group-hover:text-primary group-hover:scale-110">500+</div>
                <div className="transition-colors duration-200 group-hover:text-concrete-charcoal">Projects Completed</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-concrete-charcoal transition-all duration-300 group-hover:text-primary group-hover:scale-110">25+</div>
                <div className="transition-colors duration-200 group-hover:text-concrete-charcoal">Years Experience</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl font-bold text-concrete-charcoal transition-all duration-300 group-hover:text-primary group-hover:scale-110">100%</div>
                <div className="transition-colors duration-200 group-hover:text-concrete-charcoal">Quality Assured</div>
              </div>
            </div>

            {/* Company Logo Images */}
            <div className="flex items-center space-x-6 pt-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <p className="text-sm text-concrete-gray font-medium">Trusted by leading companies:</p>
              <div className="flex items-center space-x-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=100&h=40&q=80" alt="Partner 1" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=100&h=40&q=80" alt="Partner 2" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=100&h=40&q=80" alt="Partner 3" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                alt="Modern concrete construction showcasing RX3 premium solutions"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              
              {/* Floating Quality Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-concrete-light transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                    <Check className="h-6 w-6 text-primary transition-transform duration-200 hover:scale-110" />
                  </div>
                  <div>
                    <div className="font-semibold text-concrete-charcoal">ISO Certified</div>
                    <div className="text-sm text-concrete-gray">Quality Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
