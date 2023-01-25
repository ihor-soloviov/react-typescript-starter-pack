import React from 'react';

import productsFromServer from './data/products.json';
import { ProductList } from './components/ProductList';

const App: React.FC = () => (
  <div>
    <h1>Mate Academy</h1>
    <ProductList products={productsFromServer} />
  </div>
);

export default App;
