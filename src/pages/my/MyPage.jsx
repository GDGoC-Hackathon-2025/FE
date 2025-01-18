import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ComplainCard from "../../components/ComplainCard";
import FundingCard from "../../components/FundingCard";
import axios from "axios";

const API_URL = "https://api.example.com/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
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
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px; /* PageContainer의 최대 너비 설정 */
  padding: 20px; /* 여백 추가 */
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
`

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

const PlaceholderCard = styled.div`
  width: 200px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #999;
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
  color: ${(props) => (props.isVerified ? "#3790EB" : "black")}; /* 글씨 색상 변경 */
`;

const NoData = styled.div`
  text-align: center;
  font-size: 16px;
  color: #999;
  margin: 20px 0;
`;

const MyPage = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [verificationText, setVerificationText] = useState("사업자 인증하기");

    useEffect(() => {
        fetchData();
    }, []);

    const handleVerificationClick = () => {
        alert("인증되었습니다");
        setVerificationText("사업자");

      };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL, {
                params: { page: 1, size: 6, category: "funding" }, // 기본 값 설정
            });
            const { dtoList } = response.data.data;
            setData(dtoList);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
            // 오류 발생 시 dummyData 사용
            setData(dummyData.data.dtoList);
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
                    boardName: "환경 보호 캠페인",
                    pname: "쓰레기 없는 거리 만들기",
                    pdesc:
                        "지역 주민들과 함께 쓰레기를 치우는 활동입니다. 깨끗한 환경을 유지하기 위해 함께 참여해주세요!",
                    price: 500000,
                    goalPrice: 1000000,
                    nowPrice: 600000,
                    remainPrice: 400000,
                    percentage: 60.0,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
                {
                    id: 2,
                    boardName: "일자리 창출 프로젝트",
                    pname: "청년 취업 지원",
                    pdesc:
                        "청년들을 위한 일자리 프로그램으로 다양한 직무 교육을 제공합니다. 지역 경제 활성화에 기여해주세요!",
                    price: 1000000,
                    goalPrice: 2000000,
                    nowPrice: 1500000,
                    remainPrice: 500000,
                    percentage: 75.0,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
                {
                    id: 3,
                    boardName: "지역 시설 개선",
                    pname: "노후된 공원 재정비",
                    pdesc:
                        "지역 주민들이 안전하고 편안하게 이용할 수 있도록 공원을 새롭게 정비하는 프로젝트입니다.",
                    price: 300000,
                    goalPrice: 800000,
                    nowPrice: 400000,
                    remainPrice: 400000,
                    percentage: 50.0,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
                {
                    id: 4,
                    boardName: "안전 프로젝트",
                    pname: "어린이 보호구역 개선",
                    pdesc:
                        "어린이들의 안전을 위한 보호구역 정비와 교통안전 시설 설치 프로젝트입니다.",
                    price: 800000,
                    goalPrice: 1500000,
                    nowPrice: 1000000,
                    remainPrice: 500000,
                    percentage: 66.7,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
                {
                    id: 5,
                    boardName: "환경 보호 캠페인",
                    pname: "재활용 교육 프로그램",
                    pdesc:
                        "재활용의 중요성을 알리고 주민들에게 올바른 재활용 방법을 교육하는 캠페인입니다.",
                    price: 200000,
                    goalPrice: 500000,
                    nowPrice: 300000,
                    remainPrice: 200000,
                    percentage: 60.0,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
                {
                    id: 6,
                    boardName: "시설 개선 프로젝트",
                    pname: "공공 화장실 리모델링",
                    pdesc:
                        "지역 주민들이 편안하게 사용할 수 있도록 공공 화장실을 리모델링하는 프로젝트입니다.",
                    price: 400000,
                    goalPrice: 1000000,
                    nowPrice: 600000,
                    remainPrice: 400000,
                    percentage: 60.0,
                    uploadFileNames: ["https://via.placeholder.com/150"],
                },
            ],
            pageRequest: {
                page: 1,
                size: 6,
            },
            pageNumList: [1],
            prev: false,
            next: false,
            totalCount: 6,
            prevPage: 0,
            nextPage: 0,
            totalPage: 1,
            current: 1,
        },
        error: null,
    };

    return (
        <Container>
            <PageContainer>
                <PageTitle>마이페이지</PageTitle>
                {/* User Info */}
                <UserInfo>
                    <UserName>조은</UserName>
                    <UserEmail>iamjiseun@naver.com</UserEmail>
                </UserInfo>
                <Verification
                    onClick={handleVerificationClick}
                    isVerified={verificationText === "사업자"} /* 조건 전달 */
                >
                    {verificationText}
                </Verification>
                {/* My Requests Section */}
                <Section>
                    <SectionTitle>내가 올린 요청</SectionTitle>
                    <CardList>
                        {/* Placeholder for cards */}
                        <ComplainCard />
                        <ComplainCard />
                        <ComplainCard />

                    </CardList>
                </Section>

                {/* My Created Funding Section */}
                <Section>
                    <SectionTitle>내가 주최한 펀딩</SectionTitle>
                    <CardContainer>
                        {loading ? (
                            <Loading>로딩 중...</Loading>
                        ) : data.length > 0 ? (
                            data.map((item) => <FundingCard item={item}></FundingCard>)
                        ) : (
                            <NoData>데이터가 없습니다.</NoData>
                        )}
                    </CardContainer>
                </Section>

                <Section>
                    <SectionTitle>
                        내가 참여한 펀딩
                    </SectionTitle>
                    <CardContainer>
                        {loading ? (
                            <Loading>로딩 중...</Loading>
                        ) : data.length > 0 ? (
                            data.map((item) => <FundingCard item={item}></FundingCard>)
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
