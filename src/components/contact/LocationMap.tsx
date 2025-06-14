
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ExternalLink, Phone } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="bg-concrete-light py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-concrete-charcoal mb-4">Visit Our Location</h2>
            <p className="text-xl text-concrete-gray">
              Come see our state-of-the-art manufacturing facility and showroom
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Placeholder */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-concrete-charcoal mb-2">Interactive Map</h3>
                  <p className="text-concrete-gray mb-4">
                    Google Maps integration would be displayed here
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-concrete-light">
                <h3 className="text-xl font-bold text-concrete-charcoal mb-4">RX3 Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-concrete-charcoal">Full Address</p>
                      <p className="text-concrete-gray">
                        123 Industrial Avenue<br />
                        Construction District<br />
                        City, State 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Navigation className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-concrete-charcoal">Directions</p>
                      <p className="text-concrete-gray">
                        Located on Industrial Avenue, easily accessible from Highway 101. 
                        Free parking available on-site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-concrete-light">
                <h3 className="text-lg font-semibold text-concrete-charcoal mb-3">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-concrete-gray">
                  <div>• Downtown District</div>
                  <div>• Industrial Zone</div>
                  <div>• Residential Areas</div>
                  <div>• Commercial Sector</div>
                  <div>• Suburban Projects</div>
                  <div>• Regional Delivery</div>
                </div>
                <p className="text-xs text-concrete-gray mt-3">
                  *Extended delivery available for large orders
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-white flex-1">
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex-1">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Before Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
