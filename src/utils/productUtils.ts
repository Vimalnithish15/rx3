
import { Product } from '@/data/products';

export interface Filters {
  category: string;
  size: string;
  application: string;
  priceRange: number[];
}

export const filterProducts = (products: Product[], filters: Filters, searchQuery: string): Product[] => {
  return products.filter(product => {
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filters.category === '' || filters.category === 'all' || product.category === filters.category;
    const matchesSize = filters.size === '' || filters.size === 'all' || product.size === filters.size;
    const matchesApplication = filters.application === '' || filters.application === 'all' || product.application === filters.application;
    
    return matchesSearch && matchesCategory && matchesSize && matchesApplication;
  });
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return parseInt(a.price.split('$')[1]) - parseInt(b.price.split('$')[1]);
      case 'price-high':
        return parseInt(b.price.split('$')[1]) - parseInt(a.price.split('$')[1]);
      default:
        return 0;
    }
  });
};

export const paginateProducts = (products: Product[], currentPage: number, productsPerPage: number): Product[] => {
  const startIndex = (currentPage - 1) * productsPerPage;
  return products.slice(startIndex, startIndex + productsPerPage);
};
