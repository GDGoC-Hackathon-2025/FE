import React, { useState } from "react";
import styled from "styled-components";
import ImageIcon from "../../assets/icons/Image.svg";
import { useNavigate } from "react-router-dom";

const ComplainCreatePage = () => {
  const [title, setTitle] = useState("");
  const [date] = useState(new Date().toISOString().split("T")[0]); // 오늘 날짜로 고정
  const [content, setContent] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 카테고리 상태
  const [image, setImage] = useState(null); // 선택된 이미지 상태
  const navigate = useNavigate(); 

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = () => {
    alert("작성이 완료되었습니다.");
    navigate("/");
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // 카테고리 선택
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // 이미지 데이터 저장
      };
      reader.readAsDataURL(file); // 파일을 data URL로 변환
    }
  };

  return (
    <Container>
      <Content>
        <TitleLabel>제목</TitleLabel>
        <TitleInput
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />

        <TitleLabel>작성일</TitleLabel>
        <DateInput type="date" value={date} readOnly />

        <TitleLabel>민원 마감일</TitleLabel>
        <EndDateWrapper>
          <EndDateInput type="date" value={endDate} onChange={handleEndDateChange} />
        </EndDateWrapper>

        <TitleLabel>카테고리</TitleLabel>
        <CategoryContainer>
          {["일자리", "시설", "환경", "안전"].map((category) => (
            <Category
              key={category}
              isSelected={selectedCategory === category}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Category>
          ))}
        </CategoryContainer>

        <TitleLabel>내용</TitleLabel>
        <ContentInput
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="민원 내용을 작성하세요"
        />

        <TitleLabel>이미지 첨부</TitleLabel>
        <Image onClick={() => document.getElementById("fileInput").click()}>
          {image ? (
            <img src={image} alt="uploaded" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <img src={ImageIcon} alt="Image Icon" style={{ width: "55%", height: "55%", objectFit: "cover"}} />
          )}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </Image>

        <ConfirmButton onClick={handleSubmit}>민원 게시하기</ConfirmButton>
      </Content>
    </Container>
  );
};

export default ComplainCreatePage;

const Image = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const Category = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isSelected ? "#000" : "#FFFFFF")};
  border: 1px solid #b3b3b3;
  border-radius: 20px;
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: #f1f1f1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  margin-top: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 20px;
`;

const TitleLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  pointer-events: none;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TitleInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ContentInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 42dvh;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const EndDateWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const EndDateInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ConfirmButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  background: #3790eb;
  border: 1px solid #3790eb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  font-size: 20px;
`;
