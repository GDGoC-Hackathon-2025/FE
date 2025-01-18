import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import ContentSection from "./ContentSection";

const ComplainDetail = () => {
  const { domainId } = useParams();
  console.log(domainId);

  return (
    <PageContainer>
      <ContentSection></ContentSection>
      <CommentSection></CommentSection>
    </PageContainer>
  );
};

export default ComplainDetail;

const Wrapper = styled.div`
  width: 80vw;
  margin: 50px auto;
  background-color: pink;
`;

// 페이지 전체 레이아웃
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;
