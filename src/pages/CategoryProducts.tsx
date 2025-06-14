
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductsFilter from '@/components/products/ProductsFilter';
import ProductsGrid from '@/components/products/ProductsGrid';
import CategoryProductsHero from '@/components/categories/CategoryProductsHero';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { useState, useEffect } from 'react';
import { Filters } from '@/utils/productUtils';

const CategoryProducts = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  // Convert URL category name to match the filter format
  const getCategoryForFilter = (urlCategory: string) => {
    // Map URL category names to filter category names
    const categoryMapping: { [key: string]: string } = {
      'breeze-blocks': 'Breeze Blocks',
      'compound-walls': 'Compound Walls',
      'door-and-window-frames': 'Door & Window Frames',
      'concrete-fencing': 'Concrete Fencing',
      'concrete-furniture': 'Concrete Furniture',
      'precast-ventilators': 'Precast Ventilators',
      'paver-blocks': 'Paver Blocks',
      'concrete-blocks-and-bricks': 'Concrete Blocks & Bricks'
    };
    
    return categoryMapping[urlCategory] || 'all';
  };

  // Initialize filters with category from URL
  const [filters, setFilters] = useState<Filters>({
    category: categoryName ? getCategoryForFilter(categoryName) : 'all',
    size: 'all',
    application: 'all',
    priceRange: [0, 10000],
  });

  // Update filters when categoryName changes
  useEffect(() => {
    if (categoryName) {
      setFilters(prev => ({
        ...prev,
        category: getCategoryForFilter(categoryName)
      }));
    }
  }, [categoryName]);

  // Handle filters change while preserving category from URL
  const handleFiltersChange = (newFilters: Filters) => {
    setFilters({
      ...newFilters,
      category: categoryName ? getCategoryForFilter(categoryName) : 'all',
    });
  };

  const displayCategoryName = categoryName ? 
    categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 
    'All Categories';

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
              <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{displayCategoryName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <CategoryProductsHero 
        categoryName={displayCategoryName} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductsFilter 
            filters={filters} 
            setFilters={handleFiltersChange}
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

export default CategoryProducts;
