
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Eye, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface RelatedProductsProps {
  currentProductId: number;
  category: string;
}

const RelatedProducts = ({ currentProductId, category }: RelatedProductsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample related products
  const relatedProducts = [
    {
      id: 2,
      name: 'Ventilator Block Pro',
      category: 'Breeze Blocks',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
      price: '$18 - $28',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Decorative Screen Block',
      category: 'Breeze Blocks',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      price: '$22 - $32',
      rating: 4.6
    },
    {
      id: 4,
      name: 'Security Fencing Panel',
      category: 'Concrete Fencing',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
      price: '$35 - $55',
      rating: 4.9
    },
    {
      id: 5,
      name: 'Premium Door Frame',
      category: 'Door & Window Frames',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      price: '$95 - $130',
      rating: 4.7
    },
    {
      id: 6,
      name: 'Garden Planter Block',
      category: 'Breeze Blocks',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop',
      price: '$12 - $18',
      rating: 4.5
    }
  ];

  const productsPerView = 4;
  const maxSlides = Math.ceil(relatedProducts.length / productsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-500">☆</span>}
        <span className="text-sm text-concrete-gray ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-concrete-charcoal">Related Products</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === maxSlides - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: maxSlides }, (_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts
                  .slice(slideIndex * productsPerView, (slideIndex + 1) * productsPerView)
                  .map((product) => (
                    <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="bg-white text-concrete-charcoal hover:bg-white/90 mr-2"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                        <Badge className="absolute top-2 left-2 bg-primary text-white">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-concrete-charcoal mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="mb-2">
                          {renderStars(product.rating)}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          {product.price}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Get Quote
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {Array.from({ length: maxSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-primary' : 'bg-concrete-gray/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
