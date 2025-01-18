import React from "react";
import styled from "styled-components";
import CommentIcon from "../assets/icons/CommentIcon.svg";

import LikesIcon from "../assets/icons/LikesIcon.svg";
import { useNavigate } from "react-router-dom";

const ComplainCard = ({
  complain = {
    id: 1,
    title: "지역 환경 개선 프로젝트",
    contents:
      "지역의 공원과 거리를 정비하여 깨끗하고 살기 좋은 환경을 만드는 프로젝트입니다.",
    endDate: "2025-02-01",
    commentCount: 15,
    likesCount: 120,
    dDay: 10,
  },
}) => {
  const navigate = useNavigate();
  const id = "1";
  return (
    <ComplainCardWrapper onClick={() => navigate(`complain/${id}`)}>
      <Contents>
        <Location>아산시</Location>
        <Title>{complain.title}</Title>
        <Description>{complain.contents}</Description>
      </Contents>
      <ActionFooter>
        <Duration>기간: ~{complain.endDate}</Duration>
        <ButtonContainer>
          <Comments>
            <img src={CommentIcon} alt="comment" />
            <CommentCount>10</CommentCount>
          </Comments>
          <Likes>
            <img src={LikesIcon} alt="likes" />
            <LikesCount>10</LikesCount>
          </Likes>
          <DDay>
            <DDayText>D-10</DDayText>
          </DDay>
        </ButtonContainer>
      </ActionFooter>
    </ComplainCardWrapper>
  );
};

export default ComplainCard;

const ComplainCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  padding: 25px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); /* 하단에 자연스러운 그림자 */
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2); /* 호버 시 더 뚜렷한 그림자 */
  }
`;

const Contents = styled.div`
  display: flex;

  flex-direction: column;
  gap: 5px;
`;
const Location = styled.p`
  font-size: 12px;
  color: #2175cb;
  font-weight: bold;
`;
const Title = styled.h1`
  width: 260px;
  font-size: 20px;
  margin-bottom: 5px;
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  text-overflow: ellipsis; /* ...으로 표시 */
`;
const Description = styled.h2`
  font-size: 14px;
  color: #747474;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 최대 3줄까지 표시 */
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2; /* 줄 간격 설정 */
  text-overflow: ellipsis;
`;
const ActionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Duration = styled.p`
  font-size: 13px;
  color: #1c1c1c;
  font-weight: bold;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
`;
const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;
const CommentCount = styled.span`
  font-size: 12px;
`;
const Likes = styled(Comments)``;

const LikesCount = styled(CommentCount)``;

const DDay = styled.div`
  width: 40px;
  height: 40px;
  background-color: #3790eb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DDayText = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: white;
`;
