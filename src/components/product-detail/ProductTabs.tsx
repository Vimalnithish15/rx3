
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Star, User, Calendar } from 'lucide-react';

interface Product {
  fullDescription: string;
  specifications: Record<string, string>;
  applications: string[];
  downloadableFiles: Array<{ name: string; type: string; size: string }>;
}

interface ProductTabsProps {
  product: Product;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      author: "John Smith",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent Quality",
      content: "These breeze blocks exceeded our expectations. The quality is outstanding and they were perfect for our residential project. Installation was straightforward and the finish is beautiful."
    },
    {
      id: 2,
      author: "Sarah Johnson",
      rating: 4,
      date: "2024-01-10",
      title: "Great for Commercial Use",
      content: "Used these for a commercial building project. The ventilation properties are excellent and they maintain their appearance well. Would definitely recommend for similar applications."
    },
    {
      id: 3,
      author: "Mike Chen",
      rating: 5,
      date: "2024-01-05",
      title: "Professional Service",
      content: "Not only is the product quality top-notch, but the customer service and technical support were exceptional. They helped us calculate exactly what we needed for our project."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-6 bg-concrete-light">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="applications">Applications</TabsTrigger>
        <TabsTrigger value="installation">Installation</TabsTrigger>
        <TabsTrigger value="downloads">Downloads</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Product Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-concrete-gray leading-relaxed">{product.fullDescription}</p>
            <div className="mt-6 p-4 bg-concrete-light rounded-lg">
              <h4 className="font-semibold text-concrete-charcoal mb-2">Why Choose Our Products?</h4>
              <ul className="space-y-1 text-sm text-concrete-gray">
                <li>• Manufactured using premium materials and advanced techniques</li>
                <li>• Rigorous quality control at every stage of production</li>
                <li>• Environmentally sustainable manufacturing processes</li>
                <li>• Backed by comprehensive warranty and support</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specifications" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-concrete-light rounded border-l-4 border-primary">
                  <span className="font-medium text-concrete-charcoal">{key}:</span>
                  <span className="text-concrete-gray text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Specifications may vary slightly based on manufacturing batch. 
                For critical applications, please request certified test results.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="applications" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Applications & Use Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((application, index) => (
                <div key={index} className="p-4 bg-concrete-light rounded-lg border border-concrete-light hover:border-primary transition-colors">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-concrete-charcoal">{application}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-concrete-charcoal mb-3">Project Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-concrete-light rounded-lg">
                  <h5 className="font-medium text-concrete-charcoal mb-2">Residential Complex</h5>
                  <p className="text-sm text-concrete-gray">Modern apartment building featuring decorative breeze blocks for enhanced ventilation and aesthetic appeal.</p>
                </div>
                <div className="p-4 border border-concrete-light rounded-lg">
                  <h5 className="font-medium text-concrete-charcoal mb-2">Commercial Office</h5>
                  <p className="text-sm text-concrete-gray">Corporate headquarters utilizing breeze blocks for natural ventilation and sustainable building design.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="installation" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Installation Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-concrete-charcoal mb-3">Tools Required</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {['Spirit Level', 'Rubber Mallet', 'Mortar Mix', 'Trowel', 'Measuring Tape', 'Safety Equipment'].map((tool, index) => (
                    <Badge key={index} variant="outline" className="justify-start">{tool}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-concrete-charcoal mb-3">Installation Steps</h4>
                <ol className="space-y-3">
                  {[
                    'Prepare the foundation and ensure it is level and stable',
                    'Mark the layout according to architectural drawings',
                    'Apply mortar to the foundation using appropriate mix ratio',
                    'Place the first row of blocks, ensuring proper alignment',
                    'Check level and adjust as necessary before mortar sets',
                    'Continue with subsequent rows, maintaining consistent joints',
                    'Clean excess mortar and finish joints as required',
                    'Allow proper curing time before applying any loads'
                  ].map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full text-sm flex items-center justify-center">{index + 1}</span>
                      <span className="text-concrete-gray">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Professional Installation Recommended:</strong> For best results and warranty coverage, 
                  we recommend professional installation by certified contractors.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="downloads" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Download Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {product.downloadableFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-concrete-light rounded-lg hover:border-primary transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-concrete-charcoal">{file.name}</h4>
                      <p className="text-sm text-concrete-gray">{file.type} • {file.size}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-concrete-light rounded-lg">
              <h4 className="font-semibold text-concrete-charcoal mb-2">Need Custom Documentation?</h4>
              <p className="text-sm text-concrete-gray mb-3">
                We can provide project-specific documentation, custom CAD drawings, and technical support.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                Request Custom Documents
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-concrete-charcoal">Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-concrete-light rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.7</div>
                  <div className="flex justify-center mb-1">
                    {renderStars(5)}
                  </div>
                  <div className="text-sm text-concrete-gray">Based on 124 reviews</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm w-4">{rating}</span>
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-500 h-2 rounded-full" 
                            style={{width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%`}}
                          ></div>
                        </div>
                        <span className="text-sm text-concrete-gray w-8">{rating === 5 ? 87 : rating === 4 ? 25 : rating === 3 ? 9 : rating === 2 ? 2 : 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-concrete-light rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-concrete-charcoal">{review.author}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">{renderStars(review.rating)}</div>
                            <span className="text-sm text-concrete-gray">•</span>
                            <span className="text-sm text-concrete-gray">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-medium text-concrete-charcoal mb-2">{review.title}</h5>
                    <p className="text-concrete-gray">{review.content}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
