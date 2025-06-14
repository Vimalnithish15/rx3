
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageSquare, Phone, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  name: string;
  category: string;
}

interface QuoteRequestFormProps {
  product: Product;
}

const QuoteRequestForm = ({ product }: QuoteRequestFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    quantity: '',
    timeline: '',
    message: '',
    newsletter: false,
    updates: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        description: "First name, last name, email, and phone are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Quote request submitted successfully!",
      description: "Our sales team will contact you within 24 hours with a detailed quote.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      quantity: '',
      timeline: '',
      message: '',
      newsletter: false,
      updates: false
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-concrete-charcoal mb-4">Request a Quote</h2>
        <p className="text-lg text-concrete-gray">
          Get a detailed quote for <span className="font-semibold text-primary">{product.name}</span> tailored to your project needs
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-concrete-charcoal flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium text-concrete-charcoal">Sales Hotline</div>
                  <div className="text-concrete-gray">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium text-concrete-charcoal">Email</div>
                  <div className="text-concrete-gray">sales@rx3.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium text-concrete-charcoal">Response Time</div>
                  <div className="text-concrete-gray">Within 24 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-concrete-charcoal">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-concrete-gray">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Competitive pricing with no hidden costs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fast turnaround on quotes and orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Technical support and consultation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reliable delivery and logistics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quote Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-concrete-charcoal flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Quote Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company or organization"
                    className="mt-1"
                  />
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Building</SelectItem>
                        <SelectItem value="commercial">Commercial Project</SelectItem>
                        <SelectItem value="industrial">Industrial Facility</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="renovation">Renovation/Upgrade</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="e.g., 500 units"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="When do you need this?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                      <SelectItem value="quarter">Within 3 months</SelectItem>
                      <SelectItem value="planning">Still planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your project requirements, specific needs, or any questions you have..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked === true)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for product updates and industry insights
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="updates"
                      checked={formData.updates}
                      onCheckedChange={(checked) => handleInputChange('updates', checked === true)}
                    />
                    <Label htmlFor="updates" className="text-sm">
                      Send me updates about this quote and related products
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  size="lg"
                >
                  Submit Quote Request
                </Button>

                <p className="text-xs text-concrete-gray text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                  We will only use your information to provide the requested quote and related communications.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestForm;
