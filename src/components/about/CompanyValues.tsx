
import { Heart, Award, Users, Clock } from 'lucide-react';

const CompanyValues = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards and exceeds customer expectations."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We build lasting relationships through exceptional service and reliable products."
    },
    {
      icon: Heart,
      title: "Integrity & Trust",
      description: "We conduct business with honesty, transparency, and ethical practices, building trust with every interaction."
    },
    {
      icon: Clock,
      title: "Innovation & Growth",
      description: "We continuously invest in new technologies and processes to stay ahead of industry trends and deliver cutting-edge solutions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-concrete-charcoal mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
            These principles guide our decisions and shape our culture, ensuring we deliver exceptional value to our clients and community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-concrete-light to-white border border-concrete-light hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-concrete-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-concrete-gray leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
