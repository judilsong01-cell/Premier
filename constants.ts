
import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'T-shirt Gráfica "Palanca"',
    price: 8500,
    seller: 'NzojiWear',
    imageUrl: 'https://picsum.photos/seed/palanca/400/400',
    description: 'T-shirt de algodão com estampa exclusiva da Palanca Negra Gigante.'
  },
  {
    id: 2,
    name: 'Fones de Ouvido Sem Fio',
    price: 15000,
    seller: 'TechLuanda',
    imageUrl: 'https://picsum.photos/seed/fones/400/400',
    description: 'Fones com cancelamento de ruído, perfeitos para o dia a dia.'
  },
  {
    id: 3,
    name: 'Tênis Urbanos "Kuduro"',
    price: 25000,
    seller: 'SapaDromo',
    imageUrl: 'https://picsum.photos/seed/kuduro/400/400',
    description: 'Tênis confortáveis e estilosos, inspirados na cultura angolana.'
  },
  {
    id: 4,
    name: 'Power Bank 10000mAh',
    price: 12000,
    seller: 'Gadgets.ao',
    imageUrl: 'https://picsum.photos/seed/powerbank/400/400',
    description: 'Nunca fique sem bateria. Carregador portátil rápido e eficiente.'
  },
    {
    id: 5,
    name: 'Boné "Kalunga"',
    price: 5000,
    seller: 'UrbanStyle',
    imageUrl: 'https://picsum.photos/seed/bone/400/400',
    description: 'Boné de aba reta com bordado temático do mar angolano.'
  },
  {
    id: 6,
    name: 'Mochila para Laptop',
    price: 18000,
    seller: 'Mochilas&Cia',
    imageUrl: 'https://picsum.photos/seed/mochila/400/400',
    description: 'Mochila resistente à água com compartimento para laptop de 15".'
  }
];

export const KWANZA_FORMATTER = new Intl.NumberFormat('pt-AO', {
  style: 'currency',
  currency: 'AOA',
  minimumFractionDigits: 2,
});
