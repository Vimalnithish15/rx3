
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';

interface Filters {
  category: string;
  size: string;
  application: string;
  priceRange: number[];
}

interface ProductsFilterProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const ProductsFilter = ({ filters, setFilters, sortBy, setSortBy }: ProductsFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const categories = [
    'Breeze Blocks',
    'Compound Walls',
    'Door & Window Frames',
    'Concrete Fencing',
    'Furniture',
    'Precast Ventilators',
    'Paver Blocks',
    'Concrete Blocks & Bricks'
  ];

  const sizes = ['Small', 'Medium', 'Large', 'Extra Large', 'Custom'];
  const applications = ['Residential', 'Commercial', 'Industrial', 'Infrastructure'];

  const clearFilters = () => {
    setFilters({
      category: 'all',
      size: 'all',
      application: 'all',
      priceRange: [0, 10000],
    });
  };

  return (
    <div className="lg:w-80 w-full">
      <Card className="sticky top-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden"
          >
            {isFilterOpen ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
          </Button>
        </CardHeader>
        
        {(isFilterOpen || window.innerWidth >= 1024) && (
          <CardContent className="space-y-6">
            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-concrete-charcoal mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Select sorting option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-concrete-charcoal mb-2">
                Category
              </label>
              <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Size Filter */}
            <div>
              <label className="block text-sm font-medium text-concrete-charcoal mb-2">
                Size
              </label>
              <Select value={filters.size} onValueChange={(value) => setFilters({...filters, size: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="All Sizes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sizes</SelectItem>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Application Filter */}
            <div>
              <label className="block text-sm font-medium text-concrete-charcoal mb-2">
                Application
              </label>
              <Select value={filters.application} onValueChange={(value) => setFilters({...filters, application: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="All Applications" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  {applications.map((application) => (
                    <SelectItem key={application} value={application}>
                      {application}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-concrete-charcoal mb-2">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </label>
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => setFilters({...filters, priceRange: value})}
                max={10000}
                min={0}
                step={100}
                className="w-full"
              />
            </div>

            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="w-full"
            >
              Clear All Filters
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ProductsFilter;
