import React, { useEffect, useState } from "react";
import ComplainCard from "../../components/ComplainCard";

import styled from "styled-components";
import axios from "axios";
import { defaultInstance } from "../../shared/Request";

// API 호출을 위한 기본 URL (변경 필요)

const CommonComplain = () => {
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

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState("전체"); // 선택된 카테고리
  const [loading, setLoading] = useState(false);

  // 카테고리별 데이터를 가져오는 함수
  const fetchData = async (page = 1, category = "전체") => {
    setLoading(true);
    try {
      const response = await defaultInstance.get("", {
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
