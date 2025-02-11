import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import { fetchCarts } from '@/api';

function CartPage({ carts }) {
  //props의 destructuring
  console.log(carts, 33333);
  return (
    <>
      <CartHeader />
      <CartList carts={carts} />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await fetchCarts();

  return {
    props: {
      carts: data,
    },
  };
}

export default CartPage;
