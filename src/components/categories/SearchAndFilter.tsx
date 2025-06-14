
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Grid, List, Search } from 'lucide-react';

const SearchAndFilter = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const applications = ['Residential', 'Commercial', 'Industrial', 'Infrastructure'];
  const materials = ['Standard Concrete', 'Reinforced Concrete', 'Lightweight Concrete'];
  const sizes = ['Small', 'Medium', 'Large', 'Custom'];

  return (
    <section className="bg-white py-8 border-b border-concrete-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-concrete-gray h-5 w-5" />
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Filter and View Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>

            <div className="flex items-center border border-concrete-light rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-6 p-6 bg-concrete-light rounded-lg">
            <h3 className="text-lg font-semibold text-concrete-charcoal mb-4">Filter Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-concrete-charcoal mb-2">Application</label>
                <div className="space-y-2">
                  {applications.map((app) => (
                    <label key={app} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-concrete-gray" />
                      <span className="text-sm text-concrete-gray">{app}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-concrete-charcoal mb-2">Material Type</label>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-concrete-gray" />
                      <span className="text-sm text-concrete-gray">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-concrete-charcoal mb-2">Size Range</label>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-concrete-gray" />
                      <span className="text-sm text-concrete-gray">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-3">
              <Button variant="outline">Clear All</Button>
              <Button className="bg-primary hover:bg-primary/90">Apply Filters</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchAndFilter;
