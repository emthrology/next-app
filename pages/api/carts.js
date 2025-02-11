import { deleteCartItem } from '@/api';

export default async function handler(req1, res1) {
  const id = req1.body.id;
  const { data } = await deleteCartItem(id); // response를 통째로 넘기면 순환참조 오류가 발생한다
  res1.status(200).send(data);
}
