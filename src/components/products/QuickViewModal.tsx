
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, ShoppingCart, Heart, GitCompare } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  size: string;
  application: string;
  specifications: string[];
  description: string;
  features: string[];
}

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{product.name}</span>
            {/* <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button> */}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <Badge className="absolute top-2 left-2 bg-primary text-white">
                {product.category}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-concrete-charcoal mb-2">
                {product.name}
              </h2>
              <div className="text-2xl font-bold text-primary mb-4">
                {product.price}
              </div>
              <p className="text-concrete-gray mb-4">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-concrete-charcoal">Size:</span>
                <span className="text-concrete-gray ml-2">{product.size}</span>
              </div>
              <div>
                <span className="font-medium text-concrete-charcoal">Application:</span>
                <span className="text-concrete-gray ml-2">{product.application}</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-concrete-charcoal mb-2">Key Features</h3>
              <ul className="space-y-1 text-sm text-concrete-gray">
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-concrete-charcoal mb-2">Specifications</h3>
              <ul className="space-y-1 text-sm text-concrete-gray">
                {product.specifications.map((spec, index) => (
                  <li key={index}>• {spec}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <GitCompare className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
