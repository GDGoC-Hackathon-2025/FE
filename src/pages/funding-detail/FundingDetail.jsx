import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import LikesIcon from "../../assets/icons/LikesIcon.svg";
import ComplainCard from "../../components/ComplainCard";
import ContentSection from "./ContentSection";

const FundingDetail = () => {
  const dummyData = {
    success: true,
    data: {
      id: 14,
      boardName: "환경 보호 캠페인",
      pname: "쓰레기 없는 거리 만들기 프로젝트",
      pdesc: `이 프로젝트는 단순한 환경 보호 활동이 아니라, 지역 사회와 협력하여 지속 가능한 변화를 이끌어내기 위한 대규모 캠페인입니다. 우리의 목표는 단순히 거리의 쓰레기를 청소하는 것을 넘어, 지역 주민들이 환경 문제를 스스로 인식하고, 더 나아가 환경 보호의 주체가 되는 데 있습니다. 이를 위해 우리는 다양한 활동과 프로그램을 기획하고 실행할 예정입니다.
      
      현재 우리의 지구는 급격히 변화하고 있습니다. 플라스틱 쓰레기의 급증, 자원의 남용, 기후 변화 등으로 인해 환경은 심각한 위기에 직면해 있습니다. 특히 도심 지역에서는 무분별하게 버려지는 쓰레기와 올바르지 않은 쓰레기 처리 방식으로 인해 환경 오염 문제가 심화되고 있습니다. 이러한 문제를 해결하기 위해서는 개개인의 참여와 실천이 필수적입니다. 그러나 많은 사람들은 환경 문제의 심각성을 충분히 인식하지 못하거나, 어떻게 실천해야 할지에 대해 막연한 두려움을 느끼곤 합니다. 따라서 우리는 주민들에게 환경 문제의 심각성을 알리고, 실질적인 해결 방안을 제시하기 위해 이 프로젝트를 시작하게 되었습니다.
      
      우리는 이 프로젝트를 통해 지역 주민들과의 소통과 협력을 강화하고자 합니다. 첫 번째 단계로, 지역 주민들을 대상으로 한 환경 교육 세션을 진행할 예정입니다. 교육 내용은 올바른 분리수거 방법, 플라스틱 사용 줄이기, 재활용 품목의 활용 방안 등을 포함할 것입니다. 이러한 교육을 통해 주민들은 단순히 정보를 제공받는 데 그치지 않고, 환경 보호를 위한 실질적인 방법을 익힐 수 있을 것입니다. 특히, 어린이와 청소년을 대상으로 한 맞춤형 프로그램을 통해 환경 보호의 중요성을 조기에 인식시킬 계획입니다. 이는 다음 세대가 환경 보호에 대한 올바른 가치를 형성하고, 지속 가능한 삶의 방식을 실천할 수 있도록 돕는 데 큰 기여를 할 것입니다.
      
      두 번째 단계는 지역 내 주요 거리와 공원에서 쓰레기 줍기 행사를 진행하는 것입니다. 이 행사는 단순한 청소 활동이 아니라, 지역 커뮤니티가 함께 협력하고 환경 보호를 체감할 수 있는 기회로 기획되었습니다. 참가자들은 쓰레기 줍기 활동을 통해 환경 오염의 심각성을 직접 느끼게 될 것입니다. 또한, 행사 이후에는 참가자들이 자신의 경험을 공유하고, 더 나은 환경을 만들기 위해 할 수 있는 다른 방법들을 논의할 수 있는 시간을 마련할 예정입니다. 이러한 활동은 지역 사회의 결속력을 강화하고, 환경 보호에 대한 관심과 참여를 이끌어내는 데 큰 역할을 할 것입니다.
      
      세 번째 단계로는 쓰레기 처리 시스템의 개선을 목표로 하고 있습니다. 우리는 지역 정부 및 기업과 협력하여 더 많은 쓰레기통을 설치하고, 효율적인 쓰레기 수거 및 처리를 위한 시스템을 도입할 계획입니다. 특히, 재활용 쓰레기와 일반 쓰레기를 쉽게 구분할 수 있는 스마트 쓰레기통을 도입하여 주민들이 보다 쉽게 분리수거를 할 수 있도록 지원할 예정입니다. 이러한 시스템은 쓰레기 처리의 효율성을 높이는 동시에, 주민들에게 환경 보호의 중요성을 다시 한번 인식시키는 계기가 될 것입니다.
      
      마지막으로, 우리는 이 프로젝트가 단발성 이벤트로 끝나지 않고, 지속 가능한 활동으로 자리 잡을 수 있도록 노력할 것입니다. 이를 위해 주민들과의 소통을 지속적으로 유지하며, 프로젝트의 성과를 꾸준히 공유할 계획입니다. 또한, 지역 학교와 기업을 대상으로 환경 보호와 관련된 워크숍과 세미나를 정기적으로 개최하여 더 많은 사람들이 환경 보호에 동참할 수 있는 기회를 제공할 것입니다.
      
      이 프로젝트는 단순히 쓰레기를 줄이는 활동이 아니라, 지역 주민들이 자신의 삶의 방식을 돌아보고, 더 나은 미래를 위한 변화를 실천할 수 있도록 돕는 데 목적이 있습니다. 우리가 사는 지구는 우리가 함께 보호해야 할 소중한 자산입니다. 작은 실천이 모여 큰 변화를 만들 수 있음을 믿으며, 우리는 이 프로젝트를 통해 더 많은 사람들이 환경 보호의 중요성을 깨닫고 행동할 수 있도록 최선을 다할 것입니다.`,
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
