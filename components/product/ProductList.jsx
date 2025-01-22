import axios from 'axios';
import Image from 'next/image';
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
            return (
              <li key={product.id}>
                <div>
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={300}
                    alt={product.name}
                  />
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ProductList;
