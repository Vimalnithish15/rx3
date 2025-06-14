
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-concrete-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                RX3
              </div>
              <div>
                <h3 className="text-xl font-bold">RX3</h3>
                <p className="text-sm text-gray-300">We Design Concrete</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of premium concrete products with 25+ years of experience 
              in delivering quality construction solutions.
            </p>
            
            <div className="flex space-x-4">
              {/* Social Media Icons Placeholder */}
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
         <div>
  <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
  <ul className="space-y-3">
    <li>
      <Link to="/" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
        <span>Home</span>
        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
    <li>
      <Link to="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
        <span>About Us</span>
        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
    <li>
      <Link to="/categories" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
        <span>Categories</span>
        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
    <li>
      <Link to="/products" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
        <span>Products</span>
        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center group">
        <span>Contact</span>
        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
  </ul>
</div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {[
                'Breeze Blocks',
                'Compound Walls',
                'Paver Blocks',
                'Door & Window Frames',
                'Concrete Furniture',
                'Precast Ventilators'
              ].map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                  >
                    <span>{category}</span>
                    <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Industrial Avenue<br />
                    Construction District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Sales & Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@rx3.com</p>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-xl font-semibold mb-2">Ready to Start Your Project?</h4>
              <p className="text-gray-300">Get a free quote today and discover the RX3 Pro difference.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-concrete-charcoal/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-400">
            <div>
              <p>&copy; 2024 RX3 Pro. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
