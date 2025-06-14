
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductsPagination = ({ currentPage, totalPages, onPageChange }: ProductsPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="animate-fade-in">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#"
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className="transition-all duration-300 hover:scale-105 active:scale-95"
            />
          </PaginationItem>
          {[...Array(Math.min(5, totalPages))].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={() => onPageChange(i + 1)}
                className="transition-all duration-300 hover:scale-110 active:scale-95"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              href="#"
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              className="transition-all duration-300 hover:scale-105 active:scale-95"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductsPagination;
