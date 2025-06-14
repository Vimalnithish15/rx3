
import { Check } from 'lucide-react';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "1999",
      title: "Company Founded",
      description: "Started as a small family business with a vision to provide quality concrete products to local builders."
    },
    {
      year: "2005",
      title: "First Major Expansion",
      description: "Opened our second manufacturing facility and introduced precast concrete solutions."
    },
    {
      year: "2010",
      title: "Technology Innovation",
      description: "Implemented automated production systems and quality control measures."
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Launched eco-friendly production processes and recycled material integration."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Embraced digital technologies for better customer service and project management."
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading concrete products manufacturer with nationwide reach."
    }
  ];

  return (
    <section className="py-20 bg-concrete-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-concrete-charcoal mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
            From humble beginnings to industry leadership - discover the milestones that shaped our company.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-white/50 w-full hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-3 md:mb-0">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-concrete-charcoal">
                          {milestone.title}
                        </h3>
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {milestone.year}
                      </div>
                    </div>
                    <p className="text-concrete-gray leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
