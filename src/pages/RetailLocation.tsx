
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Clock, ShoppingBag } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RetailLocation = () => {
  const { location } = useParams<{ location: string }>();
  const navigate = useNavigate();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const getLocationData = (location: string) => {
    switch (location) {
      case 'tuticorin':
        return {
          name: 'RX3 - Tuticorin Retail Outlet',
          address: '789 Main Street, Tuticorin, Tamil Nadu 628001',
          phone: '+91 461 345 6789',
          email: 'retail.tuticorin@rx3concrete.com',
          hours: 'Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4!2d78.1348!3d8.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnNTMuMyJOIDc4wrAwOCcwNS4zIkU!5e0!3m2!1sen!2sin!4v1234567890'
        };
      case 'nagercoil':
        return {
          name: 'RX3 - Nagercoil Retail Outlet',
          address: '321 Commercial Street, Nagercoil, Tamil Nadu 629001',
          phone: '+91 4652 345 678',
          email: 'retail.nagercoil@rx3concrete.com',
          hours: 'Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4!2d77.4318!3d8.1790!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTAnNDQuNCJOIDc3wrAyNScxOC41IkU!5e0!3m2!1sen!2sin!4v1234567890'
        };
      default:
        return null;
    }
  };

  const locationData = getLocationData(location || '');

  if (!locationData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
          <Button onClick={() => navigate('/')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`bg-gradient-to-r from-secondary to-secondary/90 text-white py-16 transition-all duration-1000 transform ${
          heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <Button 
            onClick={() => navigate(-1)} 
            variant="outline" 
            className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-4 mb-6">
            <ShoppingBag className="h-12 w-12 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              {locationData.name}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in">
            Your trusted partner for quality concrete products
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div 
              ref={infoRef}
              className={`transition-all duration-1000 transform ${
                infoVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Store Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <MapPin className="h-6 w-6 text-secondary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">{locationData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Phone className="h-6 w-6 text-secondary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href={`tel:${locationData.phone}`}
                        className="text-secondary hover:text-secondary/80 transition-colors duration-200"
                      >
                        {locationData.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Mail className="h-6 w-6 text-secondary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href={`mailto:${locationData.email}`}
                        className="text-secondary hover:text-secondary/80 transition-colors duration-200"
                      >
                        {locationData.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Clock className="h-6 w-6 text-secondary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Store Hours</h3>
                      <p className="text-gray-600">{locationData.hours}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                    <h3 className="font-semibold mb-2 text-secondary">Available Services</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Product consultation</li>
                      <li>• Order processing</li>
                      <li>• Delivery coordination</li>
                      <li>• Customer support</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className={`transition-all duration-1000 transform ${
              infoVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">Store Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={locationData.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailLocation;
