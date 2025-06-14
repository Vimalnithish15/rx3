
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

interface CategoryProductsHeroProps {
  categoryName: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CategoryProductsHero = ({ categoryName, searchQuery, setSearchQuery }: CategoryProductsHeroProps) => {
  const { ref, isVisible } = useScrollAnimation();

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <section className="bg-gradient-to-br from-concrete-light to-white py-12" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Back to Categories Link */}
          <div className="mb-6">
            <Link 
              to="/categories"
              className="inline-flex items-center text-concrete-gray hover:text-primary transition-colors duration-300 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to All Categories
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-concrete-charcoal mb-6">
              {formatCategoryName(categoryName)}
              <span className="text-primary block animate-slide-in-right">Products</span>
            </h1>
            
            <p className="text-xl text-concrete-gray mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover our premium {formatCategoryName(categoryName).toLowerCase()} collection, 
              engineered for durability and designed for excellence.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-concrete-light transition-all duration-500 hover:bg-white hover:shadow-xl hover:scale-105" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-concrete-gray h-5 w-5 transition-colors duration-200" />
                  <input
                    type="text"
                    placeholder={`Search ${formatCategoryName(categoryName).toLowerCase()}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-concrete-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:border-primary/50"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 transition-all duration-300 hover:scale-105 active:scale-95">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProductsHero;
