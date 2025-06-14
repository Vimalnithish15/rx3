
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We work closely with you to understand your specific requirements and project needs."
    },
    {
      step: "02",
      title: "Design & Engineering",
      description: "Our expert team creates detailed designs and engineering specifications for your project."
    },
    {
      step: "03",
      title: "Quality Manufacturing",
      description: "Products are manufactured using state-of-the-art equipment and rigorous quality control."
    },
    {
      step: "04",
      title: "Delivery & Installation",
      description: "We ensure timely delivery and provide professional installation support when needed."
    }
  ];

  return (
    <section className="py-20 bg-concrete-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-concrete-charcoal mb-4">
            Our Process
          </h2>
          <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
            From initial consultation to final delivery, we follow a proven process that ensures exceptional results every time.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm border border-white/50 hover:shadow-md transition-shadow duration-300">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-concrete-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-concrete-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
