import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fetchCategory = async () => {
  const response = await httpClient.get<Category[]>("/category");
  return response.data;
};

// 카테고리 fetch 함수. 이를 header에 적용한다
