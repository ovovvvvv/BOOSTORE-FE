export interface Cart {
  id: number;
  bookId: number;
  title: string;
  summary: string;
  quantity: number;
  price: number;
  /*"18,000"과 같이 작성하고 싶더라도 계산을 하려면 string 보다는, 
  렌더링 할때 filter사용이 유리
*/
}
