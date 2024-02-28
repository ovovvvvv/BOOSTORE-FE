import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/common/Title";
import { CartStyle } from "./Cart";
import CartSummary from "../components/cart/CartSummary";

const Order = () => {
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { totalQuantity, totalPrice } = orderDataFromCart;

  console.log(orderDataFromCart);

  return (
    <>
      <Title size="large">주문서 작성</Title>
      <CartStyle>
        <div className="content"></div>
        <div className="summary">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
      </CartStyle>
    </>
  );
};

export default Order;
