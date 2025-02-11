import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', //게이트웨이 주소를 여기에
});

/**
 * @description 상품목록 조회
 * @returns ProductList
 */
function fetchProducts() {
  return instance.get('/products');
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

// 파라미터를 object로 받으면 순서 문제가 없음
// 하지만 api 파일은 문서역할도 해야하기때문에 object를 풀어서 표시한다
function createCartItem({ id, name, imageUrl, price }) {
  return instance.post(`/carts`, {
    id,
    name,
    imageUrl,
    price,
  });
}

function fetchCarts() {
  return instance.get(`/carts`);
}

function deleteCartItem(id) {
  return instance.delete(`/carts/${id}`);
}

export {
  fetchProducts,
  fetchProductById,
  createCartItem,
  fetchCarts,
  deleteCartItem,
};
