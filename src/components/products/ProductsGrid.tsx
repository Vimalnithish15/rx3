
import { useState } from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import ProductsPagination from './ProductsPagination';
import ProductsGridHeader from './ProductsGridHeader';
import { allProducts, Product } from '@/data/products';
import { filterProducts, sortProducts, paginateProducts, Filters } from '@/utils/productUtils';
import { useProductActions } from '@/hooks/useProductActions';

interface ProductsGridProps {
  filters: Filters;
  sortBy: string;
  searchQuery: string;
}

const ProductsGrid = ({ filters, sortBy, searchQuery }: ProductsGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { favorites, comparison, toggleFavorite, toggleComparison } = useProductActions();
  const productsPerPage = 12;

  // Filter and sort products
  const filteredProducts = filterProducts(allProducts, filters, searchQuery);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, sortedProducts.length);
  const paginatedProducts = paginateProducts(sortedProducts, currentPage, productsPerPage);

  return (
    <div className="flex-1">
      <ProductsGridHeader
        startIndex={startIndex}
        endIndex={endIndex}
        totalProducts={sortedProducts.length}
        comparisonCount={comparison.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
            onToggleFavorite={() => toggleFavorite(product.id)}
            onToggleComparison={() => toggleComparison(product.id)}
            isFavorite={favorites.includes(product.id)}
            isInComparison={comparison.includes(product.id)}
          />
        ))}
      </div>

      <ProductsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsGrid;
