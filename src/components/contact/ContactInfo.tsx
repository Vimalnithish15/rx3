
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-concrete-light">
        <h2 className="text-2xl font-bold text-concrete-charcoal mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-concrete-charcoal">Phone</h3>
              <p className="text-concrete-gray">+1 (555) 123-4567</p>
              <p className="text-sm text-concrete-gray">Sales & Support</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-concrete-charcoal">Email</h3>
              <p className="text-concrete-gray">info@rx3.com</p>
              <p className="text-sm text-concrete-gray">General Inquiries</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-concrete-charcoal">WhatsApp</h3>
              <p className="text-concrete-gray">+1 (555) 123-4567</p>
              <p className="text-sm text-concrete-gray">Quick Response</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-concrete-charcoal">Address</h3>
              <p className="text-concrete-gray">
                123 Industrial Avenue<br />
                Construction District<br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-concrete-light">
        <h3 className="text-xl font-bold text-concrete-charcoal mb-4 flex items-center">
          <Clock className="mr-2 h-5 w-5 text-primary" />
          Business Hours
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-concrete-gray">Monday - Friday</span>
            <span className="font-medium text-concrete-charcoal">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-concrete-gray">Saturday</span>
            <span className="font-medium text-concrete-charcoal">9:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-concrete-gray">Sunday</span>
            <span className="font-medium text-concrete-charcoal">Closed</span>
          </div>
        </div>
      </div>

      {/* Office Photos */}
      <div className="bg-white p-8 rounded-lg shadow-lg border border-concrete-light">
        <h3 className="text-xl font-bold text-concrete-charcoal mb-4">Our Facilities</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-concrete-light">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop"
              alt="RX3 Factory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-2 left-2 text-white text-sm font-medium">Manufacturing Plant</p>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-concrete-light">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop"
              alt="RX3 Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p className="absolute bottom-2 left-2 text-white text-sm font-medium">Head Office</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
        <h3 className="text-lg font-semibold text-concrete-charcoal mb-4">Need Immediate Assistance?</h3>
        <div className="space-y-3">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            <Phone className="mr-2 h-4 w-4" />
            Call for Emergency Support
          </Button>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
