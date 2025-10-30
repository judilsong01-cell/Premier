
import React from 'react';
import { Product } from '../types';
import { KWANZA_FORMATTER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-surface-bg rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 group">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md text-text-main truncate">{product.name}</h3>
        <p className="text-sm text-text-secondary mb-2">por {product.seller}</p>
        <p className="text-lg font-semibold text-secondary">{KWANZA_FORMATTER.format(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
