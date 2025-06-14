
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductImageGallery from '@/components/product-detail/ProductImageGallery';
import ProductInfo from '@/components/product-detail/ProductInfo';
import ProductTabs from '@/components/product-detail/ProductTabs';
import RelatedProducts from '@/components/product-detail/RelatedProducts';
import QuoteRequestForm from '@/components/product-detail/QuoteRequestForm';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Share2, Download, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  // Sample product data - in a real app this would come from an API
  const product = {
    id: 1,
    name: 'Decorative Breeze Block',
    category: 'Breeze Blocks',
    price: '$15 - $25',
    images: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&auto=format&crop=center',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop&auto=format&crop=right'
    ],
    shortDescription: 'High-quality decorative breeze blocks perfect for ventilation and aesthetic appeal in residential buildings.',
    fullDescription: 'Our premium decorative breeze blocks combine functionality with aesthetic appeal, making them ideal for modern architectural projects. Manufactured using high-grade concrete and advanced molding techniques, these blocks provide excellent ventilation while maintaining structural integrity. The decorative patterns add visual interest to any building facade while ensuring optimal airflow.',
    specifications: {
      'Dimensions': '400mm x 200mm x 200mm',
      'Weight': '18 kg',
      'Compressive Strength': '4.0 N/mm²',
      'Material': 'High-grade concrete',
      'Finish': 'Smooth molded surface',
      'Color Options': 'Natural gray, White, Custom colors available',
      'Thermal Conductivity': '0.5 W/mK',
      'Fire Rating': 'Class A1 - Non-combustible'
    },
    features: [
      'Excellent ventilation properties',
      'Decorative geometric patterns',
      'Weather and UV resistant',
      'Easy installation and handling',
      'Low maintenance requirements',
      'Environmentally friendly materials'
    ],
    applications: [
      'Residential building facades',
      'Commercial ventilation systems',
      'Decorative partition walls',
      'Garden and landscape features',
      'Privacy screens',
      'Architectural accent elements'
    ],
    warranty: '25 years structural warranty',
    certifications: ['ISO 9001:2015', 'ASTM C90 Compliant', 'Green Building Certified'],
    downloadableFiles: [
      { name: 'Technical Specifications', type: 'PDF', size: '2.4 MB' },
      { name: 'Installation Guide', type: 'PDF', size: '1.8 MB' },
      { name: 'CAD Drawings', type: 'DWG', size: '0.9 MB' }
    ]
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories">{product.category}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Link to="/products">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <ProductImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="container mx-auto px-4 py-8">
        <ProductTabs product={product} />
      </div>

      {/* Quote Request Form */}
      <div className="bg-concrete-light py-16">
        <div className="container mx-auto px-4">
          <QuoteRequestForm product={product} />
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 py-16">
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
