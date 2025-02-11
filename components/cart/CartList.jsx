import React from 'react';
import Image from 'next/image';
import styles from './CartList.module.css';
import { deleteCartItem } from '@/api';
import { useRouter } from 'next/router';
import axios from 'axios';
function CartList({ carts }) {
  const router = useRouter();
  const totalPrice = carts.reduce((acc, cur) => acc + parseFloat(cur.price), 0);
  const totalAmount = carts.length;

  const removeCartItem = async id => {
    // const response = await deleteCartItem(id); //1.직접 서버 api 호출
    const response = await axios.post('http://localhost:3000/api/carts', {
      id: id,
    }); //2. frontend api route를 이용하여 서버 api 호출을 숨김 (pages/api/carts.js 참조)
    console.log('removeCartItem:', response);
    if (response.status == 200) {
      alert(`${response.data.name} 삭제 완료`);
      router.replace(router.asPath);
      /**
       * router.replace: 히스토리스택을 쌓지 않음 (push로처리했으면 히스토리가 쌓여서 뒤로가기 시 carts 페이지 두번나온다)
       * router.asPath: next.js router에 대해 따로찾아봐라
       * http://localhost:3000/_next/data/development/cart.json
       * 위 주소는 ssr로 getServerSideProps를 호출했을때 받아오는 json이다
       */
    }
  };
  return (
    <>
      <ul>
        {carts &&
          carts.map(cart => {
            return (
              <li key={cart.id} className={styles.item}>
                <Image
                  src={cart.imageUrl}
                  width={100}
                  height={100}
                  alt={cart.name}
                />
                <div className={styles.description}>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                  <div>
                    {/* 메소드에 인자를 전달하기위해서는 온클릭 이벤트에 화살표함수를 써야함 */}
                    <button onClick={() => removeCartItem(cart.id)}>
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
      <hr />
      <div className={styles.total}>
        <p>총 가격: {totalPrice}</p>
        <p>총 수량: {totalAmount}</p>
      </div>
    </>
  );
}

export default CartList;
