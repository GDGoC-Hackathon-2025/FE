import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FundingCard from "../../components/FundingCard";
import { defaultInstance } from "../../shared/Request";

// API 호출을 위한 기본 URL (변경 필요)
const API_URL = "https://api.example.com/data";

const FundingList = () => {
  const dummyData = {
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
          uploadFileNames: ["https://via.placeholder.com/150"],
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
          uploadFileNames: ["https://via.placeholder.com/150"],
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
          uploadFileNames: ["https://via.placeholder.com/150"],
        },
        {
          id: 4,
          boardName: "지역 발전",
          pname: "청년 창업 지원 센터 설립",
          pdesc:
            "아산시에 청년 창업 지원 센터를 설립하여 지역 내 청년 창업자들을 위한 교육과 자원을 제공합니다.",
          price: 8000000,
          goalPrice: 20000000,
          nowPrice: 12000000,
          remainPrice: 8000000,
          percentage: 60.0,
          uploadFileNames: ["https://via.placeholder.com/150"],
        },
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
          uploadFileNames: ["https://via.placeholder.com/150"],
        },
        {
          id: 6,
          boardName: "안전 프로젝트",
          pname: "지역 어린이 안전 시설 확충",
          pdesc:
            "어린이 보호구역에 교통안전 시설을 설치하여 안전한 환경을 제공하는 프로젝트입니다.",
          price: 1000000,
          goalPrice: 2500000,
          nowPrice: 1200000,
          remainPrice: 1300000,
          percentage: 48.0,
          uploadFileNames: ["https://via.placeholder.com/150"],
        },
        {
          id: 7,
          boardName: "문화 발전 프로젝트",
          pname: "지역 독립 서점 설립 지원",
          pdesc:
            "지역 주민들이 독서를 통해 지식을 공유하고, 지역 문화를 활성화할 수 있도록 독립 서점을 설립하는 프로젝트입니다.",
          price: 1500000,
          goalPrice: 4000000,
          nowPrice: 2500000,
          remainPrice: 1500000,
          percentage: 62.5,
          uploadFileNames: ["https://via.placeholder.com/150"],
        },
        {
          id: 8,
          boardName: "환경 개선",
          pname: "지역 하천 정화 프로젝트",
          pdesc:
            "지역 하천의 오염 문제를 해결하고 깨끗한 자연 환경을 복원하기 위한 주민 참여 프로젝트입니다.",
          price: 1000000,
          goalPrice: 5000000,
          nowPrice: 2000000,
          remainPrice: 3000000,
          percentage: 40.0,
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

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState("전체"); // 선택된 카테고리
  const [loading, setLoading] = useState(false);

  // 카테고리별 데이터를 가져오는 함수
  const fetchData = async (page = 1, category = "전체") => {
    setLoading(true);
    try {
      const response = await defaultInstance.get("/funding/list?category=WORK");
      const { dtoList, totalPage } = response.data.data;

      setData(dtoList);
      setTotalPages(totalPage);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
      const { dtoList, totalPage } = dummyData.data;

      setData(dtoList);
      setTotalPages(totalPage);
    } finally {
      setLoading(false);
    }
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchData(currentPage, activeCategory);
  }, [currentPage, activeCategory]);

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Container>
      {/* 카테고리 버튼 */}
      <CategoryContainer>
        {["전체", "일자리", "시설", "환경", "안전"].map((category) => (
          <CategoryButton
            key={category}
            isActive={activeCategory === category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1); // 카테고리 변경 시 첫 페이지로
            }}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryContainer>

      {/* 카드 리스트 */}
      <CardContainer>
        {loading ? (
          <Loading>로딩 중...</Loading>
        ) : data.length > 0 ? (
          data.map((item) => <FundingCard item={item}></FundingCard>)
        ) : (
          <NoData>데이터가 없습니다.</NoData>
        )}
      </CardContainer>
      {/* 페이지 네이션 */}
      <Pagination>
        <PageButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </PageButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            isActive={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default FundingList;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${(props) => (props.isActive ? "#333" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#555" : "#ddd")};
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => (props.isActive ? "#333" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#555" : "#ddd")};
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #999;
    cursor: not-allowed;
  }
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

export const NoData = styled.div`
  text-align: center;
  font-size: 16px;
  color: #999;
  margin: 20px 0;
`;
