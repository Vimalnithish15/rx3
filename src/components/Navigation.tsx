
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      {/* Top contact bar - Hidden on mobile */}
      <div className="bg-concrete-charcoal text-white py-2 px-4 transform transition-all duration-300 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
              <Phone className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
              <Mail className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
              <span>info@rx3.com</span>
            </div>
          </div>
          <div className="text-sm animate-fade-in">
            Mon-Fri: 8AM-6PM | Sat: 9AM-4PM
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
  <img 
    src="/rx3-logo.png" 
    alt="RX3 Logo" 
    className="w-35 h-10 transition-all duration-300 group-hover:scale-110"
  />
  
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/categories" className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group">
              Categories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/products" className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Factory Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group flex items-center gap-1">
                Factory
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/factory/tuticorin" className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    RX3 - Tuticorin Factory
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/factory/kanyakumari" className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    RX3 - Kanyakumari Factory
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Retail Outlets Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group flex items-center gap-1">
                Retail Outlets
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/retail/tuticorin" className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    RX3 - Tuticorin
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/retail/nagercoil" className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    RX3 - Nagercoil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/retail/tirunelveli" className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    RX3 - Tirunelveli
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact" className="text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-concrete-charcoal transition-all duration-200 hover:scale-110 active:scale-95"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4 animate-fade-in">
            <Link
              to="/"
              className="block text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium hover:translate-x-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium hover:translate-x-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/categories"
              className="block text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium hover:translate-x-2"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/products"
              className="block text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium hover:translate-x-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
            
            {/* Mobile Factory Menu */}
            <div className="space-y-2">
              <div className="text-concrete-charcoal font-medium">Factory</div>
              <Link
                to="/factory/tuticorin"
                className="block text-concrete-gray hover:text-primary transition-all duration-200 ml-4 hover:translate-x-2"
                onClick={toggleMenu}
              >
                RX3 - Tuticorin Factory
              </Link>
              <Link
                to="/factory/kanyakumari"
                className="block text-concrete-gray hover:text-primary transition-all duration-200 ml-4 hover:translate-x-2"
                onClick={toggleMenu}
              >
                RX3 - Kanyakumari Factory
              </Link>
            </div>

            {/* Mobile Retail Menu */}
            <div className="space-y-2">
              <div className="text-concrete-charcoal font-medium">Retail Outlets</div>
              <Link
                to="/retail/tuticorin"
                className="block text-concrete-gray hover:text-primary transition-all duration-200 ml-4 hover:translate-x-2"
                onClick={toggleMenu}
              >
                RX3 - Tuticorin
              </Link>
              <Link
                to="/retail/nagercoil"
                className="block text-concrete-gray hover:text-primary transition-all duration-200 ml-4 hover:translate-x-2"
                onClick={toggleMenu}
              >
                RX3 - Nagercoil
              </Link>
              <Link
                to="/retail/tirunelveli"
                className="block text-concrete-gray hover:text-primary transition-all duration-200 ml-4 hover:translate-x-2"
                onClick={toggleMenu}
              >
                RX3 - Tirunelveli
              </Link>
            </div>

            <Link
              to="/contact"
              className="block text-concrete-charcoal hover:text-primary transition-all duration-200 font-medium hover:translate-x-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 active:scale-95">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
