import React from "react";
import styled from "styled-components";

const ContentSection = ({ pdesc }) => {
  return (
    <ContentWrapper>
      <Content>{pdesc}</Content>
    </ContentWrapper>
  );
};

export default ContentSection;

// 민원 내용
const Content = styled.p`
  line-height: 1.6;
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: justify;
`;
const ContentWrapper = styled.div`
  margin-top: 30px;
`;
