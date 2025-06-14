
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, GitCompare, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView: () => void;
  onToggleFavorite: () => void;
  onToggleComparison: () => void;
  isFavorite: boolean;
  isInComparison: boolean;
}

const ProductCard = ({ 
  product, 
  onQuickView, 
  onToggleFavorite, 
  onToggleComparison,
  isFavorite,
  isInComparison 
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 bg-white/80 hover:bg-white ${isFavorite ? 'text-red-500' : 'text-concrete-gray'}`}
            onClick={onToggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 bg-white/80 hover:bg-white ${isInComparison ? 'text-primary' : 'text-concrete-gray'}`}
            onClick={onToggleComparison}
          >
            <GitCompare className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={onQuickView}
            className="bg-white text-concrete-charcoal hover:bg-white/90"
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
        <Badge className="absolute top-2 left-2 bg-primary text-white">
          {product.category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-concrete-charcoal mb-2 group-hover:text-primary transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <div className="space-y-2 text-sm text-concrete-gray mb-3">
          <div className="flex justify-between">
            <span>Size:</span>
            <span>{product.size}</span>
          </div>
          <div className="flex justify-between">
            <span>Application:</span>
            <span>{product.application}</span>
          </div>
        </div>
        <div className="text-lg font-bold text-primary mb-3">
          {product.price}
        </div>
        <ul className="text-xs text-concrete-gray space-y-1">
          {product.specifications.slice(0, 2).map((spec, index) => (
            <li key={index}>• {spec}</li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Get Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
