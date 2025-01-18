import React from "react";
import ComplainCard from "../../components/ComplainCard";

import styled from "styled-components";

const PopularComplain = () => {
  const complainCards = Array.from({ length: 3 }, (_, index) => (
    <ComplainCard key={index} />
  ));

  return (
    <Wrapper>
      <Title>현재 인기있는 요청이에요 🔥</Title>
      <PopularComplainWrapper>{complainCards}</PopularComplainWrapper>
    </Wrapper>
  );
};

export default PopularComplain;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PopularComplainWrapper = styled.div`
  width: 950px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
