
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsFilter from '@/components/products/ProductsFilter';
import ProductsGrid from '@/components/products/ProductsGrid';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { useState } from 'react';
import { Filters } from '@/utils/productUtils';

const Products = () => {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    size: 'all',
    application: 'all',
    priceRange: [0, 10000],
  });
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <ProductsHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductsFilter 
            filters={filters} 
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ProductsGrid 
            filters={filters}
            sortBy={sortBy}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
