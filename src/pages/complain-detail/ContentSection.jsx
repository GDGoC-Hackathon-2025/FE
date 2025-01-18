import React from "react";
import styled from "styled-components";
import LikesIcon from "../../assets/icons/LikesIcon.svg";
import { useNavigate } from "react-router-dom";

const ContentSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderSection>
        <Thumbnail src="https://udemy.wjtb.co.kr/image/content/newsletter/qv/vx/affxegcw/html/125075711qvts.png"/>
        <TitleSection>
          <TitleContent>
            <Location>아산시</Location>
            <Title>아산시 개발 교육 지원 요청</Title>
            <Date>작성일: 2025-01-18</Date>
          </TitleContent>
          <TagAndLike>
            <div className="tag">일자리</div>
            <div className="like">
              <img src={LikesIcon} alt="likes" />
              <p>128</p>
            </div>
          </TagAndLike>
        </TitleSection>
      </HeaderSection>

      <Content>
        아산시에 국비 지원으로 진행되는 개발 교육 프로그램이 없어 지역 청년들이
        취업 준비 과정에서 큰 어려움을 겪고 있습니다. 수도권에서는 이미 다양한
        국비 지원 교육이 활성화되어 많은 청년들이 취업에 필요한 기술과 지식을
        배우고 있지만, 아산시에서는 이와 같은 기회를 얻기 힘든 상황입니다. 특히
        IT, 소프트웨어 개발 분야에서 경쟁력을 갖추기 위해서는 체계적인 교육과
        실습이 필수적이며, 지역 내에서 이를 제공하는 프로그램이 절실히
        필요합니다. 지역 청년들이 수도권으로 이동하지 않고도 전문성을 기를 수
        있도록 국비 지원 개발 교육 프로그램을 개설해 주실 것을 요청합니다. 이를
        통해 아산시의 청년 취업률을 높이고, 지역 경제 활성화에도 기여할 수 있을
        것입니다.,
      </Content>
      <Button
        onClick={() => {
          navigate("/funding/create");
        }}
      >
        펀딩 오픈하기!
      </Button>
    </div>
  );
};

export default ContentSection;

// 제목 섹션
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  padding-top: 100px;
  height: 300px;
  width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 300px;
  height: 300px;
  background-color: #d3d3d3;
  border-radius: 8px;
  margin-right: 20px;
`;

const TitleContent = styled.div`
  flex: 1;
`;

const Location = styled.span`
  color: #3498db;
  font-size: 18px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 10px 0;
  font-weight: 700;
`;

const Date = styled.span`
  font-size: 14px;
  color: #7f8c8d;
`;

// 태그 및 좋아요 섹션
const TagAndLike = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  .tag {
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 14px;
    margin-right: 10px;
  }

  .like {
    display: flex;
    align-items: center;
    margin-left: auto;
    p {
      font-size: 18px;
      color: #000000;
      margin-left: 3px;
    }
  }
`;

// 민원 내용
const Content = styled.p`
  line-height: 1.6;
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 20px;
`;

// 버튼 스타일
const Button = styled.button`
  display: block;

  padding: 12px 34px;
  font-size: 16px;
  font-weight: bold;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 auto 20px auto;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); /* 하단에 자연스러운 그림자 */
  &:hover {
    background-color: #2980b9;
  }
`;
