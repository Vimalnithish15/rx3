
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: "Breeze Blocks",
    description: "Decorative concrete blocks that provide ventilation and natural light while maintaining privacy and security.",
    image: "https://rx3.in/wp-content/uploads/2024/06/Screenshot_25-6-2024_162515_-500x300.jpeg",
    productCount: 24,
    applications: ["Residential", "Commercial"],
    specifications: "Various sizes: 190x190x90mm to 390x190x190mm"
  },
  {
    id: 2,
    title: "Compound Walls",
    description: "Precast concrete wall panels offering superior strength, durability, and cost-effectiveness for perimeter security.",
    image: "https://rx3.in/wp-content/uploads/2024/05/DSC06885_11zon-scaled-500x300.jpg",
    productCount: 18,
    applications: ["Residential", "Industrial"],
    specifications: "Heights: 1.8m to 3.0m, Various finishes available"
  },
  {
    id: 3,
    title: "Door & Window Frames",
    description: "Precision-crafted concrete frames that offer exceptional durability and weather resistance for all building types.",
    image: "https://rx3.in/wp-content/uploads/2020/01/DSC06675-scaled-500x300.jpg",
    productCount: 32,
    applications: ["Residential", "Commercial"],
    specifications: "Standard and custom sizes, Multiple finish options"
  },
  {
    id: 4,
    title: "Concrete Fencing",
    description: "Heavy-duty precast fencing solutions providing maximum security and longevity for various applications.",
    image: "https://rx3.in/wp-content/uploads/2020/01/DSC06720-scaled-500x300.jpg",
    productCount: 15,
    applications: ["Industrial", "Commercial"],
    specifications: "Panel heights: 1.8m to 2.4m, Post-and-panel system"
  },
  {
    id: 5,
    title: "Concrete Furniture",
    description: "Modern, durable outdoor furniture pieces that combine functionality with contemporary aesthetic appeal.",
    image: "https://rx3.in/wp-content/uploads/2024/05/RX3_Concrete-Furniture_18-scaled-500x300.jpg",
    productCount: 28,
    applications: ["Landscaping", "Commercial"],
    specifications: "Weather-resistant finishes, Various designs available"
  },
  {
    id: 6,
    title: "Precast Ventilators",
    description: "Efficient ventilation solutions that ensure optimal air circulation while maintaining structural integrity.",
    image: "https://rx3.in/wp-content/uploads/2024/06/Screenshot_25-6-2024_163542_-500x300.jpeg",
    productCount: 12,
    applications: ["Residential", "Industrial"],
    specifications: "Various sizes and ventilation capacities"
  },
  {
    id: 7,
    title: "Paver Blocks",
    description: "Interlocking concrete pavers perfect for driveways, walkways, and outdoor spaces requiring durability.",
    image: "https://rx3.in/wp-content/uploads/2025/04/Purple-Modern-Welcome-September-XTwitter-Post-500x300.png",
    productCount: 45,
    applications: ["Landscaping", "Infrastructure"],
    specifications: "Multiple patterns, colors, and thickness options"
  },
  {
    id: 8,
    title: "Concrete Blocks & Bricks",
    description: "High-strength building blocks and bricks for structural and decorative construction applications.",
    image: "https://rx3.in/wp-content/uploads/2025/04/paver-blocks-rx3.in_-500x300.png",
    productCount: 56,
    applications: ["Residential", "Commercial"],
    specifications: "Standard and custom sizes, Various strength grades"
  }
];

const CategoriesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Convert category title to URL-friendly format
  const getCategorySlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-concrete-charcoal mb-4">
            Product Categories
          </h2>
          <p className="text-lg text-concrete-gray max-w-2xl mx-auto">
            Discover our comprehensive range of premium concrete products, 
            each designed to meet specific construction and architectural needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md"
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.productCount} Products
                </div>
                
                {/* Quick specs on hover */}
                {hoveredCard === category.id && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 animate-fade-in">
                    <div className="text-white text-center">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">{category.specifications}</p>
                      <div className="flex flex-wrap gap-1 mt-2 justify-center">
                        {category.applications.map((app) => (
                          <span key={app} className="bg-primary px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-concrete-charcoal mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-concrete-gray mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <Link to={`/category/${getCategorySlug(category.title)}`}>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white group-hover:bg-concrete-charcoal transition-colors"
                  >
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-concrete-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our engineering team can create bespoke concrete products tailored to your specific requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-concrete-light transition-all duration-300 hover:scale-105">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
