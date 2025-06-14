
import { useState } from 'react';

export const useProductActions = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [comparison, setComparison] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleComparison = (productId: number) => {
    setComparison(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  return {
    favorites,
    comparison,
    toggleFavorite,
    toggleComparison
  };
};
