
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FactoryLocation = () => {
  const { location } = useParams<{ location: string }>();
  const navigate = useNavigate();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const getLocationData = (location: string) => {
    switch (location) {
      case 'tuticorin':
        return {
          name: 'RX3 - Tuticorin Factory',
          address: '123 Industrial Area, Tuticorin, Tamil Nadu 628002',
          phone: '+91 461 234 5678',
          email: 'tuticorin@rx3concrete.com',
          hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4!2d78.1348!3d8.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnNTMuMyJOIDc4wrAwOCcwNS4zIkU!5e0!3m2!1sen!2sin!4v1234567890'
        };
      case 'kanyakumari':
        return {
          name: 'RX3 - Kanyakumari Factory',
          address: '456 Coastal Road, Kanyakumari, Tamil Nadu 629702',
          phone: '+91 4652 234 567',
          email: 'kanyakumari@rx3concrete.com',
          hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
          mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4!2d77.5385!3d8.0883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDUnMTcuOSJOIDc3wrAzMicxOC42IkU!5e0!3m2!1sen!2sin!4v1234567890'
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
        className={`bg-gradient-to-r from-primary to-primary/90 text-white py-16 transition-all duration-1000 transform ${
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {locationData.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in">
            State-of-the-art concrete manufacturing facility
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
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <MapPin className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">{locationData.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Phone className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href={`tel:${locationData.phone}`}
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        {locationData.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Mail className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href={`mailto:${locationData.email}`}
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        {locationData.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <Clock className="h-6 w-6 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold mb-1">Operating Hours</h3>
                      <p className="text-gray-600">{locationData.hours}</p>
                    </div>
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
                  <CardTitle className="text-2xl text-primary">Location Map</CardTitle>
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

export default FactoryLocation;
