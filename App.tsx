
import React, { useState, useCallback } from 'react';
import { Product } from './types';
import { MOCK_PRODUCTS } from './constants';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import SellItemModal from './components/SellItemModal';
import IdeationSection from './components/IdeationSection';

function App() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
  const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

  const addProduct = useCallback((newProduct: Omit<Product, 'id'>) => {
    setProducts(prevProducts => [
      { ...newProduct, id: prevProducts.length + 1 },
      ...prevProducts,
    ]);
    handleCloseModal();
  }, [handleCloseModal]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow container mx-auto px-4 py-6 pb-24">
        <ProductGrid products={filteredProducts} />
        <IdeationSection />
      </main>

      <Footer onSellClick={handleOpenModal} />
      
      {isModalOpen && <SellItemModal onClose={handleCloseModal} onAddProduct={addProduct} />}
    </div>
  );
}

export default App;
