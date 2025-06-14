
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface ProductsHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductsHero = ({ searchQuery, setSearchQuery }: ProductsHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-concrete-light to-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-concrete-charcoal mb-6">
          Our Premium
          <span className="text-primary block">Concrete Products</span>
        </h1>
        
        <p className="text-xl text-concrete-gray mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover our extensive range of high-quality precast concrete products designed for residential, 
          commercial, and industrial applications. Built to last, engineered for excellence.
        </p>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-concrete-light">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-concrete-gray h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-concrete-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white px-6">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
