import Image from 'next/image';
import React from 'react';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ info }) {
  const router = useRouter();
  const { id, name, imageUrl, price } = info; //object destructuring
  const addCart = async () => {
    const response = await createCartItem({ ...info });
    console.log(response, 3333);
    if (response.status == 201) {
      alert('장바구니 추가 완료');
      router.push('/cart');
    }
  };
  return (
    <div className={styles.container}>
      <Image
        src={info.imageUrl}
        width={300}
        height={300}
        alt={ProductInfo.name}
      />
      <div className={styles.description}>
        <div>
          <p>{info.name}</p>
          <p>{info.price}</p>
        </div>
        <button onClick={addCart}>장바구니에 담기</button>
      </div>
    </div>
  );
}
