
import React, { useState } from 'react';
import { Product } from '../types';

interface SellItemModalProps {
  onClose: () => void;
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

const SellItemModal: React.FC<SellItemModalProps> = ({ onClose, onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description) return;

    onAddProduct({
      name,
      price: parseFloat(price),
      description,
      seller: 'Você', // Placeholder for logged-in user
      imageUrl: `https://picsum.photos/seed/${name.replace(/\s+/g, '')}/400/400`,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-surface-bg rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">Vender um Item</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary">Nome do Produto</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full bg-background border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-text-secondary">Preço (AOA)</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required className="mt-1 block w-full bg-background border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-secondary">Descrição</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} className="mt-1 block w-full bg-background border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"></textarea>
          </div>
           <div>
            <label htmlFor="image" className="block text-sm font-medium text-text-secondary">Foto do Produto</label>
            <input type="file" id="image" className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-violet-700"/>
          </div>
          <p className="text-xs text-center text-text-secondary">
            Nota: Uma comissão de 5% será aplicada sobre o valor final da venda.
          </p>
          <button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
            Publicar Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellItemModal;
