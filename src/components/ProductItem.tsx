import React from 'react';

interface Product {
  name: string;
  color: string;
}

type Prop = {
  product: Product
};

export const ProductItem: React.FC<Prop> = ({ product }) => (
  <>
    <strong>{product.name}</strong>
    {' - '}
    {product.color}
  </>
);
