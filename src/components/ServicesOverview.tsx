
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  Clock, 
  Calendar, 
  Check, 
  ArrowRight 
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Home,
      title: "Custom Manufacturing",
      description: "Tailored concrete products designed to meet your specific project requirements and architectural vision.",
      features: ["Custom Designs", "Precise Specifications", "Quality Materials"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      title: "Design Consultation",
      description: "Expert guidance from our experienced team to help you choose the right concrete solutions for your project.",
      features: ["Expert Advice", "Design Support", "Technical Guidance"],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Fast and reliable delivery services ensuring your projects stay on schedule with minimal downtime.",
      features: ["Same Day Delivery", "Scheduled Delivery", "Nationwide Coverage"],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Calendar,
      title: "Installation Support",
      description: "Professional installation guidance and support to ensure proper setup and maximum durability.",
      features: ["Installation Guide", "Technical Support", "Maintenance Tips"],
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-concrete-light/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-concrete-charcoal mb-4">
            Comprehensive Concrete Solutions
          </h2>
          <p className="text-lg text-concrete-gray max-w-2xl mx-auto">
            Beyond manufacturing premium products, we provide end-to-end services 
            to ensure your project's success from concept to completion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-concrete-charcoal mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-concrete-gray mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-concrete-gray">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-concrete-charcoal mb-6">
                Why Choose RX3 Pro?
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "25+ years of industry expertise and proven track record",
                  "ISO certified manufacturing processes ensuring consistent quality",
                  "State-of-the-art facilities with latest production technology",
                  "Dedicated customer support and technical assistance",
                  "Competitive pricing with no compromise on quality",
                  "Sustainable practices and eco-friendly manufacturing"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-concrete-gray">{point}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern concrete manufacturing facility"
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
              
              {/* Statistics Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">500+</div>
                      <div className="text-xs text-concrete-gray">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">25+</div>
                      <div className="text-xs text-concrete-gray">Years</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">100%</div>
                      <div className="text-xs text-concrete-gray">Satisfaction</div>
                    </div>
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

export default ServicesOverview;
