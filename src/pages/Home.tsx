import { useEffect } from "react";
import styled from "styled-components";
import Title from "@/components/common/Title";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";

const Home = () => {
  const { reviews } = useMain();
  useEffect(() => {}, []);
  return (
    <HomeStyle>
      {/* 배너 */}

      {/* 베스트 셀러 */}

      {/* 신간 */}

      {/* 리뷰 */}
      <MainReview reviews={reviews} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  color: ${({ theme }) => theme.color.secondary};
`;

export default Home;
