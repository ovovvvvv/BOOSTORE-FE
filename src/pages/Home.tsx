import { useEffect } from "react";
import styled from "styled-components";
import Title from "@/components/common/Title";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <HomeStyle>
      <Title size="large" color="text">
        내용
      </Title>
      <h1>Home</h1>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.secondary};
`;

export default Home;
