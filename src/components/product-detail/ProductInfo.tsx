
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart, GitCompare, Shield, Award, Truck } from 'lucide-react';
import { useState } from 'react';

interface Product {
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  features: string[];
  warranty: string;
  certifications: string[];
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInComparison, setIsInComparison] = useState(false);

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div>
        <Badge className="mb-3 bg-primary text-white">{product.category}</Badge>
        <h1 className="text-3xl font-bold text-concrete-charcoal mb-4">{product.name}</h1>
        <p className="text-lg text-concrete-gray mb-4">{product.shortDescription}</p>
        <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-sm font-medium text-concrete-charcoal">Warranty</div>
            <div className="text-xs text-concrete-gray">{product.warranty}</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-sm font-medium text-concrete-charcoal">Certified</div>
            <div className="text-xs text-concrete-gray">Quality Assured</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-4">
            <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-sm font-medium text-concrete-charcoal">Delivery</div>
            <div className="text-xs text-concrete-gray">Fast & Reliable</div>
          </CardContent>
        </Card>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold text-concrete-charcoal mb-3">Key Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-concrete-gray">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-lg font-semibold text-concrete-charcoal mb-3">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {product.certifications.map((cert, index) => (
            <Badge key={index} variant="outline" className="border-primary text-primary">
              {cert}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Request Quote
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className={isFavorite ? 'text-red-500 border-red-500' : ''}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsInComparison(!isInComparison)}
            className={isInComparison ? 'text-primary border-primary' : ''}
          >
            <GitCompare className="h-4 w-4" />
          </Button>
        </div>
        
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
          Contact Sales Team
        </Button>
      </div>

      {/* Quick Info */}
      <Card className="bg-concrete-light border-none">
        <CardContent className="p-4">
          <h4 className="font-semibold text-concrete-charcoal mb-2">Need Help?</h4>
          <p className="text-sm text-concrete-gray mb-3">
            Our technical team is ready to help you choose the right product for your project.
          </p>
          <div className="text-sm">
            <div className="flex justify-between">
              <span className="text-concrete-gray">Phone:</span>
              <span className="text-concrete-charcoal font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between">
              <span className="text-concrete-gray">Email:</span>
              <span className="text-concrete-charcoal font-medium">sales@rx3.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductInfo;
