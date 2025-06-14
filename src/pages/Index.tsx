
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import ServicesOverview from '@/components/ServicesOverview';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <ServicesOverview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
