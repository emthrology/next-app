import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import { fetchCarts } from '@/api';

function CartPage({ carts }) {
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
