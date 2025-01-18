import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ComplainCard from "../../components/ComplainCard";
import FundingCard from "../../components/FundingCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

const PageTitle = styled.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  gap: 20px;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const UserEmail = styled.p`
  font-size: 16px;
  color: #858585;
  text-decoration: underline;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const CardList = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const Verification = styled.div`
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 50px;
  cursor: pointer;
  color: ${(props) => (props.isVerified ? "#3790EB" : "black")};
`;

const NoData = styled.div`
  text-align: center;
  font-size: 16px;
  color: #999;
  margin: 20px 0;
`;

const MyPage = () => {
  const [loading, setLoading] = useState(false);
  const [createdFundings, setCreatedFundings] = useState([]); // 내가 주최한 펀딩 데이터
  const [participatedFundings, setParticipatedFundings] = useState([]); // 내가 참여한 펀딩 데이터
  const [verificationText, setVerificationText] = useState("사업자 인증하기");

  useEffect(() => {
    fetchCreatedFundings();
    fetchParticipatedFundings();
  }, []);

  const handleVerificationClick = () => {
    alert("인증되었습니다");
    setVerificationText("사업자");
  };

  const fetchCreatedFundings = () => {
    setLoading(true);
    try {
      setCreatedFundings(dummyData1.data.dtoList);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchParticipatedFundings = () => {
    setLoading(true);
    try {
      setParticipatedFundings(dummyData2.data.dtoList);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };
  const dummyData = {
    success: true,
    data: {
      dtoList: [
        {
          id: 1,
          title: "아산시 개발 교육 지원 요청",
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
        {
          id: 4,
          title: "골목길 조명 개선 요청",
          contents:
            "야간에 골목길이 너무 어두워 안전 문제가 우려됩니다. 주민들이 안심하고 다닐 수 있도록 조명 설치를 요청합니다.",
          endDate: "2025-02-20",
          commentCount: 10,
          likesCount: 150,
          dDay: 29,
        },
        {
          id: 5,
          title: "지역 문화센터 신설 요청",
          contents:
            "지역 주민들이 다양한 취미 활동을 즐기고 배울 수 있도록 문화센터 신설을 요청합니다.",
          endDate: "2025-01-30",
          commentCount: 6,
          likesCount: 70,
          dDay: 8,
        },
        {
          id: 6,
          title: "청소년 놀이 공간 조성",
          contents:
            "청소년들이 안전하게 놀고 교류할 수 있는 전용 공간이 필요합니다. 지역 내 청소년 놀이 공간 조성을 요청합니다.",
          endDate: "2025-03-01",
          commentCount: 20,
          likesCount: 85,
          dDay: 38,
        },
        {
          id: 7,
          title: "노후된 공원 시설 개선 요청",
          contents:
            "지역 공원의 시설이 오래되어 안전사고 위험이 큽니다. 공원 시설의 재정비와 개선을 요청합니다.",
          endDate: "2025-02-10",
          commentCount: 12,
          likesCount: 90,
          dDay: 19,
        },
        {
          id: 8,
          title: "지역 마을버스 노선 확대",
          contents:
            "대중교통이 부족하여 주민들이 이동에 불편을 겪고 있습니다. 마을버스 노선 확대를 요청드립니다.",
          endDate: "2025-02-15",
          commentCount: 14,
          likesCount: 110,
          dDay: 24,
        },
        {
          id: 9,
          title: "학교 방과후 프로그램 확대",
          contents:
            "지역 초등학교의 방과후 프로그램이 부족하여 학부모들의 요구를 충족하지 못하고 있습니다. 프로그램 확대를 요청합니다.",
          endDate: "2025-01-28",
          commentCount: 5,
          likesCount: 65,
          dDay: 6,
        },
        {
          id: 10,
          title: "지역 의료시설 추가 설치 요청",
          contents:
            "응급 상황 시 의료시설 부족으로 불편을 겪고 있습니다. 지역 내 의료시설을 추가로 설치해 주시길 요청드립니다.",
          endDate: "2025-02-25",
          commentCount: 18,
          likesCount: 130,
          dDay: 34,
        },
      ],
      pageNumList: [1, 2],
      pageRequestDTO: {
        page: 1,
        size: 10,
      },
      prev: false,
      next: true,
      totalCount: 20,
      prevPage: 0,
      nextPage: 2,
      totalPage: 2,
      current: 1,
    },
    error: {
      code: 200,
      message: "Success",
    },
  };

  

  const dummyData1 = {
    success: true,
    data: {
      dtoList: [
        {
            id: 5,
            boardName: "지역 활성화",
            pname: "전통시장 푸드코트 설치",
            pdesc:
              "지역 전통시장 내 푸드코트를 조성하여 소상공인과 지역 주민 모두에게 활력을 불어넣는 프로젝트입니다.",
            price: 3000000,
            goalPrice: 7000000,
            nowPrice: 4000000,
            remainPrice: 3000000,
            percentage: 57.1,
            uploadFileNames: ["https://file.mk.co.kr/meet/neds/2022/08/image_readtop_2022_754813_16614720695147623.jpg"],
          },
      ],
    },
  };

  const dummyData2 = {
    success: true,
    data: {
      dtoList: [
        {
            id: 1,
            boardName: "교육 프로젝트",
            pname: "아산시 국비 지원 개발 수업",
            pdesc:
              "아산시에 국비 지원으로 진행되는 개발 교육 프로그램을 도입하기 위한 프로젝트입니다. 지역 청년들에게 더 많은 기회를 제공합니다.",
            price: 2000000,
            goalPrice: 5000000,
            nowPrice: 3000000,
            remainPrice: 2000000,
            percentage: 60.0,
            uploadFileNames: ["https://www.tippingkorea.co.kr/data/education/15372337551.png"],
          },
          {
            id: 2,
            boardName: "문화 활동 지원",
            pname: "소규모 공연장 설립",
            pdesc:
              "지역 주민들을 위한 소규모 공연장을 설립하여 다양한 문화 활동을 지원하는 프로젝트입니다.",
            price: 5000000,
            goalPrice: 10000000,
            nowPrice: 6000000,
            remainPrice: 4000000,
            percentage: 60.0,
            uploadFileNames: ["https://www.sjsori.com/news/photo/201705/25884_28700_1634.jpg"],
          },
          {
            id: 3,
            boardName: "공간 개선",
            pname: "노후 공원 재정비",
            pdesc:
              "아산시 노후 공원을 새롭게 정비하여 주민들에게 더 안전하고 쾌적한 환경을 제공합니다.",
            price: 1000000,
            goalPrice: 3000000,
            nowPrice: 1500000,
            remainPrice: 1500000,
            percentage: 50.0,
            uploadFileNames: ["https://www.mtime.co.kr/news/photo/201806/11166_7479_1152.jpg"],
          },
      ],
    },
  };

  return (
    <Container>
      <PageContainer>
        <PageTitle>마이페이지</PageTitle>
        <UserInfo>
          <UserName>조은</UserName>
          <UserEmail>iamjiseun@naver.com</UserEmail>
        </UserInfo>
        <Verification
          onClick={handleVerificationClick}
          isVerified={verificationText === "사업자"}
        >
          {verificationText}
        </Verification>

        {/* 내가 올린 요청 */}
        <Section>
          <SectionTitle>내가 올린 요청</SectionTitle>
          <CardList>
            <ComplainCard complain={dummyData.data.dtoList[0]} />
            <ComplainCard complain={dummyData.data.dtoList[1]} />
            <ComplainCard complain={dummyData.data.dtoList[2]} />
          </CardList>
        </Section>

        {/* 내가 주최한 펀딩 */}
        <Section>
          <SectionTitle>내가 주최한 펀딩</SectionTitle>
          <CardContainer>
            {loading ? (
              <Loading>로딩 중...</Loading>
            ) : createdFundings.length > 0 ? (
              createdFundings.map((item) => (
                <FundingCard key={item.id} item={item} />
              ))
            ) : (
              <NoData>데이터가 없습니다.</NoData>
            )}
          </CardContainer>
        </Section>

        {/* 내가 참여한 펀딩 */}
        <Section>
          <SectionTitle>내가 참여한 펀딩</SectionTitle>
          <CardContainer>
            {loading ? (
              <Loading>로딩 중...</Loading>
            ) : participatedFundings.length > 0 ? (
              participatedFundings.map((item) => (
                <FundingCard key={item.id} item={item} />
              ))
            ) : (
              <NoData>데이터가 없습니다.</NoData>
            )}
          </CardContainer>
        </Section>
      </PageContainer>
    </Container>
  );
};

export default MyPage;
