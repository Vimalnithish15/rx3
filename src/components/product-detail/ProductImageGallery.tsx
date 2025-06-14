
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-white rounded-lg border border-concrete-light overflow-hidden group">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative cursor-zoom-in">
              <img
                src={images[selectedImage]}
                alt={`${productName} - Image ${selectedImage + 1}`}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/90 hover:bg-white shadow-md"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/90 hover:bg-white shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    const link = document.createElement('a');
                    link.href = images[selectedImage];
                    link.download = `${productName}-image-${selectedImage + 1}.jpg`;
                    link.click();
                  }}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt={`${productName} - Zoomed`}
                className="w-full h-auto"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-md"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = images[selectedImage];
                  link.download = `${productName}-image-${selectedImage + 1}.jpg`;
                  link.click();
                }}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative bg-white rounded border-2 overflow-hidden transition-colors ${
              selectedImage === index 
                ? 'border-primary ring-2 ring-primary/20' 
                : 'border-concrete-light hover:border-concrete-gray'
            }`}
          >
            <img
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Info */}
      <div className="text-center text-sm text-concrete-gray">
        <p>Image {selectedImage + 1} of {images.length}</p>
        <p className="text-xs">Click to zoom • Right-click to save</p>
      </div>
    </div>
  );
};

export default ProductImageGallery;
