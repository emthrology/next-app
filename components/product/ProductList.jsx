import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';

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
              <li key={product.id} className={styles.item}>
                <Link href={`/products/${product.id}`}>
                  <div>
                    <Image
                      src={product.imageUrl}
                      width={250}
                      height={250}
                      alt={product.name}
                    />
                  </div>
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ProductList;
