import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FundingCard from "../../components/FundingCard";

// API 호출을 위한 기본 URL (변경 필요)
const API_URL = "https://api.example.com/data";

const FundingList = () => {
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
          uploadFileNames: ["https://www.ccmessage.kr/news/photo/202003/12089_44411_0508.jpg"],
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
          uploadFileNames: ["https://png.pngtree.com/background/20211215/original/pngtree-youth-college-students-studying-in-campus-classroom-picture-image_1493664.jpg"],
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
          uploadFileNames: ["https://lh6.googleusercontent.com/proxy/ZRWtf7th5UJ_ElPI8bC_8s5osTRp2kd45KUweIfmpbI2eAgZdfjOpwAptvY9GOq9ZZagYD89bNOoV419OKzFCkQrAh9OV5LygFlMffDWynU"],
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
          uploadFileNames: ["https://lh3.googleusercontent.com/proxy/HfTyt6FhBzQmDlpCTFQFIJkn-4RXE-4nur4QJdxY_-JzUz0gix85YcHGAUFCfwRLr5ziDymzcw4Ne47cT_cR1pnSUsUipCGTtigq-aNssH8q"],
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
          uploadFileNames: ["https://cdn.hkbs.co.kr/news/photo/202405/754384_490152_2834.jpg"],
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
          uploadFileNames: ["https://cdn.m-i.kr/news/photo/202301/977679_740350_439.jpg"],
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
      const response = await axios.get(API_URL, {
        params: { page, size: 6, category },
      });
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
