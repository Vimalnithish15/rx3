
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProductsGridHeaderProps {
  startIndex: number;
  endIndex: number;
  totalProducts: number;
  comparisonCount: number;
}

const ProductsGridHeader = ({ startIndex, endIndex, totalProducts, comparisonCount }: ProductsGridHeaderProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`flex justify-between items-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <div className="text-concrete-gray animate-fade-in">
        Showing {startIndex + 1}-{endIndex} of {totalProducts} products
      </div>
      {comparisonCount > 0 && (
        <div className="text-sm text-primary animate-slide-in-right bg-primary/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-105">
          {comparisonCount} products selected for comparison
        </div>
      )}
    </div>
  );
};

export default ProductsGridHeader;
