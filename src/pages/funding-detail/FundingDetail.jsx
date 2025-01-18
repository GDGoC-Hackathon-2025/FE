import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import LikesIcon from "../../assets/icons/LikesIcon.svg";
import ComplainCard from "../../components/ComplainCard";

const FundingDetail = () => {
  const dummyData = {
    success: true,
    data: {
      id: 14,
      boardName: "환경 보호 캠페인",
      pname: "쓰레기 없는 거리 만들기 프로젝트",
      pdesc:
        "이 프로젝트는 지역 주민들과 함께 쓰레기 없는 거리를 만들기 위해 기획되었습니다. 환경을 보호하고, 깨끗한 거리를 유지하기 위한 활동에 동참해주세요!",
      price: 125500000,
      goalPrice: 200000000,
      nowPrice: 125500000,
      remainPrice: 74500000,
      percentage: 0.6275,
      uploadFileNames: ["example-image.jpg"],
    },
    error: null,
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
            <Image
              src={`http://localhost:8080/images/${uploadFileNames[0]}`}
              alt={pname}
            />
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
              <InfoTitle>남은 시간</InfoTitle>
              <InfoValue className="big">2 일</InfoValue>{" "}
              {/* 시간 계산은 추가 구현 필요 */}
            </InfoRow>
            <InfoRow>
              <InfoTitle>목표 가격</InfoTitle>
              <InfoValue>{goalPrice.toLocaleString()} 원</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoTitle>펀딩 기간</InfoTitle>
              <InfoValue>2025.01.17~2025.01.31</InfoValue>{" "}
              {/* 기간 데이터 추가 필요 */}
            </InfoRow>
          </Info>
          <ComplainCard />
        </InfoWrapper>
      </Content>

      <ButtonContainer>
        <SupportButton>프로젝트 후원하기</SupportButton>
        <Likes>
          <img src={LikesIcon} alt="likes" />
          <LikesCount>10</LikesCount>
        </Likes>
      </ButtonContainer>
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
  background: #e0e0e0;
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
