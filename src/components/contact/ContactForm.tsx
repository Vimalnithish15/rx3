
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  projectType?: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ContactFormData>();
  
  const inquiryType = watch('inquiryType');

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg border border-concrete-light">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-2xl font-bold text-concrete-charcoal mb-2">Thank You!</h3>
          <p className="text-concrete-gray mb-4">
            Your message has been sent successfully. Our team will review your inquiry and get back to you within 24 hours.
          </p>
          <p className="text-sm text-concrete-gray">
            For urgent inquiries, please call us at +1 (555) 123-4567
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-concrete-light">
      <h2 className="text-2xl font-bold text-concrete-charcoal mb-6">Send Us a Message</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className="mt-1"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone number is required' })}
              className="mt-1"
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              {...register('company')}
              className="mt-1"
              placeholder="Your Company Name"
            />
          </div>
        </div>

        {/* Inquiry Type */}
        <div>
          <Label>Type of Inquiry *</Label>
          <RadioGroup className="mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="quote" 
                id="quote"
                {...register('inquiryType', { required: 'Please select an inquiry type' })}
              />
              <Label htmlFor="quote">Request Quote</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="product" 
                id="product"
                {...register('inquiryType', { required: 'Please select an inquiry type' })}
              />
              <Label htmlFor="product">Product Information</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="support" 
                id="support"
                {...register('inquiryType', { required: 'Please select an inquiry type' })}
              />
              <Label htmlFor="support">Technical Support</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="partnership" 
                id="partnership"
                {...register('inquiryType', { required: 'Please select an inquiry type' })}
              />
              <Label htmlFor="partnership">Partnership/Distribution</Label>
            </div>
          </RadioGroup>
          {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType.message}</p>}
        </div>

        {/* Project Type - Show only for quote requests */}
        {inquiryType === 'quote' && (
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <Input
              id="projectType"
              {...register('projectType')}
              className="mt-1"
              placeholder="e.g., Residential Building, Commercial Complex"
            />
          </div>
        )}

        {/* Message */}
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="mt-1"
            rows={6}
            placeholder="Please provide details about your project, requirements, or questions..."
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
