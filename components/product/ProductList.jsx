import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);
  return (
    <>
      {' '}
      <ul>
        {products &&
          products.map(product => {
            return <li key={product.id}>{product.name}</li>;
          })}
      </ul>
    </>
  );
}

export default ProductList;
