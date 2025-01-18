import React, { useEffect, useState } from "react";
import ComplainCard from "../../components/ComplainCard";

import styled from "styled-components";
import axios from "axios";

// API 호출을 위한 기본 URL (변경 필요)
const API_URL = "https://api.example.com/data";

const CommonComplain = () => {
  const dummyData = {
    success: true,
    data: {
      dtoList: [
        {
          id: 1,
          title: "지역 환경 개선 프로젝트",
          contents:
            "지역의 공원과 거리를 정비하여 깨끗하고 살기 좋은 환경을 만드는 프로젝트입니다.",
          endDate: "2025-02-01",
          commentCount: 15,
          likesCount: 120,
          dDay: 10,
        },
        {
          id: 2,
          title: "청년 취업 지원 프로그램",
          contents:
            "청년들에게 취업과 관련된 다양한 교육과 기회를 제공하는 프로그램입니다.",
          endDate: "2025-01-25",
          commentCount: 20,
          likesCount: 85,
          dDay: 3,
        },
        {
          id: 3,
          title: "노후된 시설 리모델링",
          contents:
            "지역 주민들이 자주 이용하는 노후된 공공 시설을 새롭게 리모델링합니다.",
          endDate: "2025-03-15",
          commentCount: 5,
          likesCount: 30,
          dDay: 52,
        },
        {
          id: 4,
          title: "친환경 에너지 보급 프로젝트",
          contents:
            "태양광 패널과 같은 친환경 에너지 설비를 지역 곳곳에 설치합니다.",
          endDate: "2025-02-20",
          commentCount: 12,
          likesCount: 150,
          dDay: 29,
        },
        {
          id: 5,
          title: "학교 내 교육 환경 개선",
          contents:
            "지역 학교의 교육 환경을 개선하고 학생들에게 더 나은 학습 공간을 제공합니다.",
          endDate: "2025-01-30",
          commentCount: 8,
          likesCount: 60,
          dDay: 8,
        },
        {
          id: 6,
          title: "지역 문화 행사 개최",
          contents: "지역 주민들이 함께 즐길 수 있는 문화 행사를 개최합니다.",
          endDate: "2025-03-01",
          commentCount: 25,
          likesCount: 90,
          dDay: 38,
        },
        {
          id: 7,
          title: "노인 복지 지원 프로그램",
          contents: "노인들에게 필요한 복지 서비스를 제공하고 지원합니다.",
          endDate: "2025-02-10",
          commentCount: 10,
          likesCount: 75,
          dDay: 19,
        },
        {
          id: 8,
          title: "청소년 건강 프로그램",
          contents:
            "청소년들의 신체와 정신 건강을 지원하기 위한 프로그램입니다.",
          endDate: "2025-02-15",
          commentCount: 18,
          likesCount: 100,
          dDay: 24,
        },
        {
          id: 9,
          title: "재활용 활성화 캠페인",
          contents:
            "지역 주민들에게 재활용의 중요성을 알리고 참여를 독려하는 캠페인입니다.",
          endDate: "2025-01-28",
          commentCount: 7,
          likesCount: 50,
          dDay: 6,
        },
        {
          id: 10,
          title: "지역 보건소 확충 프로젝트",
          contents:
            "지역 주민들이 더 쉽게 의료 서비스를 받을 수 있도록 보건소를 확충합니다.",
          endDate: "2025-02-25",
          commentCount: 22,
          likesCount: 140,
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

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState("전체"); // 선택된 카테고리
  const [loading, setLoading] = useState(false);

  // 카테고리별 데이터를 가져오는 함수
  const fetchData = async (page = 1, category = "전체") => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: { page, size: 6, category },
      });

      // 성공적으로 데이터를 가져왔을 때
      const { dtoList, totalPage } = response.data.data;
      setData(dtoList);
      setTotalPages(totalPage);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);

      // 실패 시 더미 데이터로 설정
      const { dtoList } = dummyData.data;
      const totalPage = Math.ceil(dtoList.length / 6); // 더미 데이터의 페이지 수 계산

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
  console.log(data);
  return (
    <Wrapper>
      <Title>최근에 들어온 요청이에요 🙌</Title>
      <CommonComplainWrapper>
        {loading ? (
          <Loading>로딩 중...</Loading>
        ) : data.length > 0 ? (
          data.map((complain) => (
            <ComplainCard key={complain.id} complain={complain} />
          ))
        ) : (
          <NoData>데이터가 없습니다.</NoData>
        )}
      </CommonComplainWrapper>

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
    </Wrapper>
  );
};

export default CommonComplain;
const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommonComplainWrapper = styled.div`
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
