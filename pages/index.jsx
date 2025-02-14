import ProductList from '@/components/product/ProductList';
import { useState } from 'react';

function Counter() {
  //usf
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  return (
    <>
      <p data-cy='counter'>{counter}</p>
      <button data-cy='plus-button' onClick={increaseCounter}>+</button>
      <button data-cy='minus-button' onClick={decreaseCounter}>-</button>
    </>
  )
}

function ProductPage() {
  return (
    <>
      <Counter/>
      <h1>상품목록</h1>
      <ProductList />
    </>
  );
}

export default ProductPage;
