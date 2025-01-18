import React from "react";
import ComplainCard from "../../components/ComplainCard";

import styled from "styled-components";

const CommonComplain = () => {
  const complainCards = Array.from({ length: 20 }, (_, index) => (
    <ComplainCard key={index} />
  ));

  return (
    <Wrapper>
      <Title>최근에 들어온 요청이에요 🙌</Title>
      <CommonComplainWrapper>{complainCards}</CommonComplainWrapper>
    </Wrapper>
  );
};

export default CommonComplain;
const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommonComplainWrapper = styled.div`
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
