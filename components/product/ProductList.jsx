import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';

function ProductList() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
  }, []); //초기값이 있어야 한번만 실행된다

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
                    {/* 인터섹션 옵저버를 활용한 이미지 로딩 최적화가 자동으로 이루어지는 next의 Image */}
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
