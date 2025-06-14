
const TeamSection = () => {
  const team = [
    {
      name: "Michael Johnson",
      position: "Chief Executive Officer",
      experience: "25+ years in construction industry",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Williams",
      position: "Chief Operations Officer",
      experience: "20+ years in manufacturing operations",
      image: "/placeholder.svg"
    },
    {
      name: "David Chen",
      position: "Head of Engineering",
      experience: "18+ years in concrete technology",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Rodriguez",
      position: "Quality Assurance Director",
      experience: "15+ years in quality management",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-concrete-charcoal mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-concrete-gray max-w-2xl mx-auto">
            Our experienced leadership team brings decades of expertise in concrete manufacturing, 
            engineering, and business management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-concrete-light to-white border border-concrete-light hover:shadow-lg transition-all duration-300"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="w-full h-full rounded-full bg-concrete-light border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-bold text-concrete-charcoal mb-2 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-concrete-gray text-sm">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
