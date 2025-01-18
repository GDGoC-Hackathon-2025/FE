import React from "react";
import ComplainCard from "../../components/ComplainCard";

import styled from "styled-components";

const PopularComplain = () => {
  const data = [
    {
      id: 1,
      title: "아산시 개발 교육 지원 요청 ",
      contents:
        "아산시에 국비 지원 개발 교육 프로그램이 없어서 취업 준비에 어려움을 겪고 있습니다. 지역 청년들을 위해 해당 프로그램 개설을 요청합니다.",
      endDate: "2025-02-01",
      commentCount: 12,
      likesCount: 110,
      dDay: 10,
    },
    {
      id: 2,
      title: "전통시장 활성화 요청",
      contents:
        "지역 전통시장에 푸드코트나 문화 행사가 없어 방문객이 줄고 있습니다. 시장 활성화를 위한 대책 마련을 요청드립니다.",
      endDate: "2025-01-25",
      commentCount: 15,
      likesCount: 95,
      dDay: 3,
    },
    {
      id: 3,
      title: "공공 와이파이 설치 요청",
      contents:
        "지역 주민들이 공원과 주요 거리에서 무료로 인터넷을 사용할 수 있도록 공공 와이파이 설치를 요청합니다.",
      endDate: "2025-03-15",
      commentCount: 8,
      likesCount: 45,
      dDay: 52,
    },
  ];

  return (
    <Wrapper>
      <Title>현재 인기있는 요청이에요 🔥</Title>
      <PopularComplainWrapper>
        {data.map((complain) => (
          <ComplainCard key={complain.id} complain={complain} />
        ))}
      </PopularComplainWrapper>
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
