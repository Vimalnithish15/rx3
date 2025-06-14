
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Construction Manager",
      company: "BuildTech Solutions",
      content: "RX3 delivered exceptional quality precast walls for our residential project. Their attention to detail and timely delivery exceeded our expectations. The products have shown excellent durability even after 3 years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sarah Chen",
      role: "Architect",
      company: "Modern Design Studio",
      content: "The decorative breeze blocks from RX3 perfectly complemented our modern architectural design. The quality is outstanding and the variety of patterns available gave us exactly what we needed.",
      rating: 5,
      image: "https://imgs.search.brave.com/RpTwVuvPCmPRmI59W8bHdIREEX0ll2w1tV1_XpvxFgM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODk1Njgx/MjYwMTQtMDZmZWE5/ZDVkMzQxP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhjSEp2Wm1sc1pY/eGxibnd3Zkh3d2ZI/eDhNQT09"
    },
    {
      name: "David Rodriguez",
      role: "Project Director",
      company: "Metro Infrastructure",
      content: "We've been working with RX3 for over 5 years. Their consistent quality, competitive pricing, and reliable delivery schedule make them our go-to supplier for all concrete products.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const companyLogos = [
    {
      name: "L&T Construction",
      image: "https://rx3.in/wp-content/uploads/2024/06/LT-2.png"
    },
    {
      name: "Shapoorji Pallonji",
      image: "https://rx3.in/wp-content/uploads/2024/06/256px-Adani_2012_logo-1.png"
    },
    {
      name: "Tata Projects",
      image: "https://rx3.in/wp-content/uploads/2024/06/sb-home-1.jpg"
    },
    {
      name: "Prestige Group",
      image: "https://rx3.in/wp-content/uploads/2024/06/pngwing.com-1.png"
    },
    {
      name: "Brigade Group",
      image: "https://rx3.in/wp-content/uploads/2024/07/logo-1.png"
    }
    // {
    //   name: "Sobha Limited",
    //   image: "	https://rx3.in/wp-content/uploads/2024/07/%E2%80%9…ilding-and-construction-logo-design_5137680-1.png"
    // }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-concrete-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-concrete-gray max-w-2xl mx-auto">
            Don't just take our word for it. Here's what construction professionals 
            and architects say about our concrete products and services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-concrete-light/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-concrete-gray mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-concrete-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-concrete-gray">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators with Real Company Logos */}
        <div className="bg-concrete-light/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-concrete-charcoal mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-concrete-gray">
              Join hundreds of satisfied clients who trust RX3 for their construction needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className="h-20 bg-white rounded-lg flex items-center justify-center border border-concrete-light/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group p-4"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
