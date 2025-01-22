import axios from 'axios';

export default function ProductDetailPage({ item }) {
  return <div>{item.name}</div>;
}
// ProductDetailPage;

//next.js에서 제공하는 method
export async function getServerSideProps(context) {
  const { id } = context.params;

  const apiUrl = `http://localhost:4000/products/${id}`;
  const { data } = await axios.get(apiUrl);
  return {
    props: {
      item: data,
    },
  };
}
