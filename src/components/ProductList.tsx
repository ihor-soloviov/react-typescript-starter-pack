import React from 'react';
import { ProductItem } from './ProductItem';

interface Product {
  id: number;
  name: string;
  color: string;
}

type Props = {
  products?: Product[]
};

export const ProductList: React.FC<Props> = ({ products = [] }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);
