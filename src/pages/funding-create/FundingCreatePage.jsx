import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageIcon from "../../assets/icons/Image.svg";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"; 

const FundingCreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [personAmount, setPersonAmount] = useState("");
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  // 페이지 로드 시 기본 날짜 범위 설정
  useEffect(() => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7); // 현재 날짜로부터 7일 뒤
    setStartDate(today);
    setEndDate(nextWeek);
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    alert("작성이 완료되었습니다.");
    navigate("/");
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleGoalAmountChange = (e) => {
    setGoalAmount(e.target.value);
  };

  const handlePersonAmountChange = (e) => {
    setPersonAmount(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Container>
      <Content>
        <TitleLabel>관련 민원</TitleLabel>
        <Complain>어찌구 저찌구 민원</Complain>

        <TitleLabel>제목</TitleLabel>
        <TitleInput
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
        />

        <TitleLabel>펀딩 기간</TitleLabel>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="yyyy-MM-dd"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          customInput={<CustomDateInput />}
        />

        <TitleLabel>목표 금액</TitleLabel>
        <TitleInput
          type="text"
          value={goalAmount}
          onChange={handleGoalAmountChange}
          placeholder="목표 금액을 입력하세요(만원)"
        />

        <TitleLabel>1인 금액</TitleLabel>
        <TitleInput
          type="text"
          value={personAmount}
          onChange={handlePersonAmountChange}
          placeholder="금액을 입력하세요"
        />

        <TitleLabel>상세 설명</TitleLabel>
        <ContentInput
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="상세 설명을 작성하세요"
        />

        <TitleLabel>이미지 첨부</TitleLabel>
        <Image onClick={() => document.getElementById("fileInput").click()}>
          {image ? (
            <img
              src={image}
              alt="uploaded"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src={ImageIcon}
              alt="Image Icon"
              style={{ width: "55%", height: "55%", objectFit: "cover" }}
            />
          )}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
        </Image>
        <ConfirmButton onClick={handleSubmit}>펀딩 작성하기</ConfirmButton>
      </Content>
    </Container>
  );
};

const CustomDateInput = ({ value, onClick }) => (
  <DateInput onClick={onClick}>
    {value || "날짜를 선택하세요"}
  </DateInput>
);

export default FundingCreatePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  margin-top: 20px;
`;

const Complain = styled.div`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  color: #3790eb;
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

const DateInput = styled.div`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  cursor: pointer;
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
