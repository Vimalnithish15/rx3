
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import FactoryLocation from "./pages/FactoryLocation";
import RetailLocation from "./pages/RetailLocation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/factory/:location" element={<FactoryLocation />} />
          <Route path="/retail/:location" element={<RetailLocation />} />
          <Route path="/retail/tirunelveli" element={<RetailLocation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
