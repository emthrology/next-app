import { fetchProductById } from '@/api';
import ProductHeader from '@/components/product/ProductHeader';
import ProductInfo from '@/components/product/ProductInfo';

export default function ProductDetailPage({ item }) {
  const headerTitle = '상품 정보 페이지';
  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <ProductInfo info={item}></ProductInfo>
    </div>
  );
}
// ProductDetailPage;

//next.js에서 제공하는 method
export async function getServerSideProps(context) {
  const { id } = context.params;
  const { data } = await fetchProductById(id);
  return {
    props: {
      item: data,
    },
  };
}
