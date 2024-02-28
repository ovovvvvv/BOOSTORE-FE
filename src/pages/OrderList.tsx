import styled from "styled-components";
import Title from "../components/common/Title";
import { useOrders } from "../hooks/useOrders";
import { formatDate, formatNumber } from "../utils/format";
import Button from "../components/common/Button";
const OrderList = () => {
  const { orders } = useOrders();

  return (
    <div>
      <Title size="large">주문 내역</Title>
      <OrderListStyle>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품명</th>
              <th>수량</th>
              <th>금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (order) => (
                console.log(order),
                (
                  <tr>
                    <td>{order.id}</td>
                    <td>{formatDate(order.createdAt, "YYYY.MM.DD")}</td>
                    <td>{order.address}</td>
                    <td>{order.receiver}</td>
                    <td>{order.contact}</td>
                    <td>{order.bookTitle}</td>
                    <td>{order.totalQuantity}권</td>
                    <td>{formatNumber(order.totalPrice)}원</td>
                    <td>
                      <Button size="small" scheme="normal">
                        자세히
                      </Button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </OrderListStyle>
    </div>
  );
};

const OrderListStyle = styled.div`
  padding: 24px 0 0 0;
  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};

    th,
    td {
      padding: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
      text-align: center;
    }
  }
`;

export default OrderList;
