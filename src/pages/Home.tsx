import { useEffect } from "react";
import styled from "styled-components";
import Title from "@/components/common/Title";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import MainNewBooks from "@/components/main/MainNewBooks";

const Home = () => {
  const { reviews, newBooks } = useMain();
  useEffect(() => {}, []);
  return (
    <HomeStyle>
      {/* 배너 */}

      {/* 베스트 셀러 */}
      <section className="section">
        <Title size="large">베스트 셀러</Title>
      </section>
      {/* 신간 */}
      <section className="section">
        <Title size="large">신간 안내</Title>
        <MainNewBooks books={newBooks} />
      </section>
      {/* 리뷰 */}
      <section className="section">
        <Title size="large">리뷰</Title>
        <MainReview reviews={reviews} />
      </section>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.secondary};
`;

export default Home;
