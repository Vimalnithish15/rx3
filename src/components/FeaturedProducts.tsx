
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Decorative Breeze Blocks",
      category: "Breeze Blocks",
      categorySlug: "breeze-blocks",
      image: "https://rx3.in/wp-content/uploads/2024/06/Screenshot_25-6-2024_162515_-120x120.jpeg",
      description: "Modern decorative blocks for ventilation and aesthetic appeal",
      features: ["Ventilation", "Privacy", "Decorative"],
    },
    {
      id: 2,
      name: "Precast Compound Walls",
      category: "Compound Walls",
      categorySlug: "compound-walls",
      image: "https://rx3.in/wp-content/uploads/2024/05/DSC06885_11zon-scaled-120x120.jpg",
      description: "Durable precast walls for residential and commercial security",
      features: ["Security", "Durability", "Quick Install"],
    },
    {
      id: 3,
      name: "Interlocking Paver Blocks",
      category: "Paver Blocks",
      categorySlug: "paver-blocks",
      image: "	https://rx3.in/wp-content/uploads/2025/04/Purple-Modern-Welcome-September-XTwitter-Post-500x300.png",
      description: "Premium interlocking blocks for driveways and walkways",
      features: ["Interlocking", "Weather Resistant", "Easy Maintenance"],
    },
    {
      id: 4,
      name: "Concrete Door Frames",
      category: "Door & Window Frames",
      categorySlug: "door-and-window-frames",
      image: "https://rx3.in/wp-content/uploads/2024/05/DSC06763_11zon-scaled-120x120.jpg",
      description: "Robust concrete frames for doors and windows",
      features: ["Structural", "Fire Resistant", "Long Lasting"],
    },
    {
      id: 5,
      name: "Precast Ventilators",
      category: "Precast Ventilators",
      categorySlug: "precast-ventilators",
      image: "https://rx3.in/wp-content/uploads/2024/06/Screenshot_25-6-2024_164048_-120x120.jpeg",
      description: "Efficient ventilation solutions for buildings",
      features: ["Air Flow", "Energy Efficient", "Maintenance Free"],
    },
    {
      id: 6,
      name: "Concrete Furniture",
      category: "Concrete Furniture",
      categorySlug: "concrete-furniture",
      image: "https://rx3.in/wp-content/uploads/2024/05/RX3_Concrete-Furniture_13-scaled-120x120.jpg",
      description: "Modern concrete furniture for outdoor spaces",
      features: ["Weather Proof", "Modern Design", "Low Maintenance"],
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Featured Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-concrete-charcoal mb-4">
            Our Premium Product Range
          </h2>
          <p className="text-lg text-concrete-gray max-w-2xl mx-auto">
            Discover our comprehensive collection of high-quality concrete products designed 
            to meet the demands of modern construction projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" style={{marginRight: '20px', marginLeft: '20px'}}>
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-concrete-light/50 hover:border-primary/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden flex justify-center">
  <img
    src={product.image}
    alt={product.name}
    className="w-40 h-40 object-cover rounded-full group-hover:scale-105 transition-transform duration-300 mx-auto"
  />
  <div className="absolute top-4 left-4">
    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
      {product.category}
    </span>
  </div>
</div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-concrete-charcoal mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-concrete-gray mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-concrete-light text-concrete-charcoal px-2 py-1 rounded text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link to={`/category/${product.categorySlug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    View Category
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
