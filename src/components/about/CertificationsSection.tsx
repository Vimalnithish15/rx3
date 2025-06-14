
import { Button } from '@/components/ui/button';
import { Award, ArrowRight } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management Systems",
      category: "Quality"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management",
      category: "Environmental"
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health & Safety",
      category: "Safety"
    },
    {
      title: "BIS Certification",
      description: "Bureau of Indian Standards",
      category: "Standards"
    }
  ];

  const awards = [
    "Excellence in Manufacturing 2023",
    "Innovation Award 2022",
    "Sustainability Champion 2021",
    "Customer Choice Award 2020"
  ];

  return (
    <section className="py-20 bg-concrete-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Quality Certifications & Awards
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence is recognized through industry certifications and awards.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold">{cert.title}</h4>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {cert.category}
                    </span>
                  </div>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 text-primary mr-3" />
              Industry Awards
            </h3>
            <div className="space-y-4 mb-8">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <p className="font-medium">{award}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
              <h4 className="text-2xl font-bold mb-4">Ready to Work with Us?</h4>
              <p className="text-gray-300 mb-6">
                Experience the difference that quality, expertise, and dedication can make for your next project.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
