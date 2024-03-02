import { Order, OrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

// http.ts 에서 만든 httpClient를 사용할 수 있습니다.
export const order = async (orderData: OrderSheet) => {
  return requestHandler("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return await requestHandler("get", "/orders");
};

export const fetchOrder = async (orderId: number) => {
  return await requestHandler("get", `/orders/${orderId}`);
};
