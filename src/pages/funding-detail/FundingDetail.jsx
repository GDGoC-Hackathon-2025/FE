import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { authInstance } from "../../shared/Request";
import LikesIcon from "../../assets/icons/LikesIcon.svg";
import ComplainCard from "../../components/ComplainCard";
import ContentSection from "./ContentSection";

const FundingDetail = () => {
  const naivgate = useNavigate();
  const dummyData = {
    success: true,
    data: {
      id: 14,
      boardName: "교육",
      pname: "아산시 개발 교육 지원 프로그램 개설",
      pdesc: `아산시에 국비 지원으로 진행되는 개발 교육 프로그램이 없어 지역 청년들이 취업 준비 과정에서 큰 어려움을 겪고 있습니다.
수도권에서는 다양한 국비 지원 교육이 활성화되어 청년들이 취업에 필요한 기술과 지식을 배우고 있지만, 아산시에서는 이러한 기회를 얻기 어려운 상황입니다.

특히 IT와 소프트웨어 개발 분야에서 경쟁력을 갖추기 위해서는 체계적인 교육과 실습이 필수적입니다. 지역 내에서 이를 제공하는 프로그램을 개설하여, 청년들이 수도권으로 이동하지 않고도 전문성을 기를 수 있도록 돕고자 합니다.

이 프로젝트는 지역 청년들의 취업률을 높이고, 지역 경제 활성화에도 기여할 것입니다.`,
      price: 1255000,
      goalPrice: 2000000,
      nowPrice: 1255000,
      remainPrice: 745000,
      percentage: 0.6275,
      uploadFileNames: [
        "https://www.tippingkorea.co.kr/data/education/15372337551.png",
      ],
    },
    error: null,
  };

  const handleSupportClick = async () => {
    naivgate("/funding/payment");
  };

  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/funding/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        setData(dummyData.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Loading>로딩 중...</Loading>;
  if (!data) return <Error>데이터를 불러오는 데 실패했습니다.</Error>;

  const {
    pname,
    price,
    goalPrice,
    percentage,
    boardName,
    pdesc,
    uploadFileNames,
  } = data;

  return (
    <PageContainer>
      <Header>
        <Category>{boardName}</Category>
        <Title>{pname}</Title>
      </Header>

      <Content>
        <ImageWrapper>
          {uploadFileNames?.[0] ? (
            <Image src={`${uploadFileNames[0]}`} alt={pname} />
          ) : (
            <NoImage>이미지 없음</NoImage>
          )}
        </ImageWrapper>
        <InfoWrapper>
          <Info>
            <InfoRow className="big">
              <InfoTitle>모인 금액</InfoTitle>
              <InfoValue className="big">{price.toLocaleString()} 원</InfoValue>
            </InfoRow>
            <ProgressWrapper>
              <ProgressBar percentage={percentage * 100} />
              <ProgressPercentage>
                {Math.round(percentage * 100)}%
              </ProgressPercentage>
            </ProgressWrapper>
            <InfoRow>
              <InfoTitle>남은 기간</InfoTitle>
              <InfoValue className="big">12 일</InfoValue>{" "}
              {/* 시간 계산은 추가 구현 필요 */}
            </InfoRow>
            <InfoRow>
              <InfoTitle>목표 가격</InfoTitle>
              <InfoValue>{goalPrice.toLocaleString()} 원</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoTitle>펀딩 기간</InfoTitle>
              <InfoValue>2025.01.10~2025.01.31</InfoValue>{" "}
              {/* 기간 데이터 추가 필요 */}
            </InfoRow>
          </Info>
          <ComplainCard />
        </InfoWrapper>
      </Content>

      <ButtonContainer>
        <SupportButton onClick={handleSupportClick}>
          프로젝트 후원하기
        </SupportButton>
        <Likes>
          <img src={LikesIcon} alt="likes" />
          <LikesCount>10</LikesCount>
        </Likes>
      </ButtonContainer>
      <ContentSection pdesc={pdesc} />
    </PageContainer>
  );
};

export default FundingDetail;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Likes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin-right: 30px;
  img {
    width: 30px;
  }
`;
const LikesCount = styled.span`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// 페이지 전체 레이아웃
const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Category = styled.p`
  font-size: 18px;
  color: #999;
  margin-bottom: 5px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 400px;
  height: 450px;
  border-radius: 8px;
`;

const NoImage = styled.div`
  font-size: 16px;
  color: #666;
`;

const Info = styled.div`
  flex: 1;
  .big {
    flex-direction: column;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .big {
    font-size: 40px;
  }
`;

const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

const InfoValue = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #333;
`;

const ProgressWrapper = styled.div`
  position: relative;
  height: 30px;
  background: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background: #3498db;
`;

const ProgressPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;

const SupportButton = styled.button`
  width: 700px;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #3498db;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #2980b9;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
`;

const Error = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
`;
