
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CategoriesHero from '@/components/categories/CategoriesHero';
import CategoriesGrid from '@/components/categories/CategoriesGrid';
import SearchAndFilter from '@/components/categories/SearchAndFilter';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

const Categories = () => {
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
              <BreadcrumbPage>Product Categories</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <CategoriesHero />
      <SearchAndFilter />
      <CategoriesGrid />
      <Footer />
    </div>
  );
};

export default Categories;
