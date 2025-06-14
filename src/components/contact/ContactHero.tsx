
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactHero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-concrete-light py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-concrete-charcoal mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-concrete-gray mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Ready to start your next construction project? Our team of experts is here to help you 
            find the perfect concrete solutions for your needs.
          </p>
          
          {/* Quick Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Call Now: +1 (555) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Email Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
