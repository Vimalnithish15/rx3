
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

const Contact = () => {
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <ContactHero />
      
      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>

      <LocationMap />
      <Footer />
    </div>
  );
};

export default Contact;
