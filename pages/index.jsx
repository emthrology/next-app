import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
  //페이지에서 state로 샤용할 객체 (setter 필수)
  const [products, setProducts] = useState();
  const [test, setTest] = useState(); //이런 식으로 원하는 객체를 추가로 설정 가능

  //컴포넌트 렌더링 되자마자 실행될 로직들
  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  console.log(products);
  return (
    <div style={{ padding: '10px' }}>
      <h1>상품목록</h1>
      <ul>
        {products &&
          products.map(product => {
            return <li key={product.id}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default ProductPage;
