import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 54px;
  font-weight: bold;
  color: #343a40;
  font-family: "BagelFatOne-Regular";
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(163, 163, 163);
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border-color: #666;
    outline: none;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 14px;
  }
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%; /* 입력창 바로 아래 */
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid rgb(163, 163, 163);
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
  list-style: none;
  margin: 5px 0 0;
  padding: 0;
  z-index: 10;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const GenderContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const GenderButton = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(163, 163, 163);
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.selected ? "black" : "#e9ecef")};
  }
  &:focus {
    border-color: #666;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    background-color: #333;
  }
`;

const LoginInfoPage = () => {
  const [nickname, setNickname] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "수원시",
    "고양시",
    "용인시",
    "성남시",
    "부천시",
    "안산시",
    "화성시",
    "안양시",
    "평택시",
    "시흥시",
    "김포시",
    "의정부시",
    "파주시",
    "광명시",
    "광주시",
    "군포시",
    "오산시",
    "이천시",
    "안성시",
    "의왕시",
    "하남시",
    "여주시",
    "양평군",
    "구리시",
    "남양주시",
    "포천시",
    "동두천시",
    "가평군",
    "양주시",
    "연천군",
    "춘천시",
    "원주시",
    "강릉시",
    "동해시",
    "속초시",
    "삼척시",
    "태백시",
    "홍천군",
    "횡성군",
    "영월군",
    "평창군",
    "정선군",
    "철원군",
    "화천군",
    "양구군",
    "인제군",
    "고성군",
    "양양군",
    "청주시",
    "충주시",
    "제천시",
    "음성군",
    "단양군",
    "진천군",
    "괴산군",
    "보은군",
    "옥천군",
    "영동군",
    "천안시",
    "공주시",
    "아산시",
    "서산시",
    "논산시",
    "계룡시",
    "당진시",
    "태안군",
    "홍성군",
    "예산군",
    "부여군",
    "서천군",
    "청양군",
    "보령시",
    "금산군",
    "전주시",
    "군산시",
    "익산시",
    "정읍시",
    "남원시",
    "김제시",
    "완주군",
    "진안군",
    "무주군",
    "장수군",
    "임실군",
    "순창군",
    "고창군",
    "부안군",
    "목포시",
    "여수시",
    "순천시",
    "나주시",
    "광양시",
    "담양군",
    "곡성군",
    "구례군",
    "고흥군",
    "보성군",
    "화순군",
    "장흥군",
    "강진군",
    "해남군",
    "영암군",
    "무안군",
    "함평군",
    "영광군",
    "장성군",
    "완도군",
    "진도군",
    "신안군",
    "포항시",
    "경주시",
    "김천시",
    "안동시",
    "구미시",
    "영주시",
    "영천시",
    "상주시",
    "문경시",
    "경산시",
    "군위군",
    "의성군",
    "청송군",
    "영양군",
    "영덕군",
    "청도군",
    "고령군",
    "성주군",
    "칠곡군",
    "예천군",
    "봉화군",
    "울진군",
    "울릉군",
    "창원시",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
    "의령군",
    "함안군",
    "창녕군",
    "고성군",
    "남해군",
    "하동군",
    "산청군",
    "함양군",
    "거창군",
    "합천군",
    "제주시",
    "서귀포시",
  ];
  
  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handleBirthdateChange = (e) => setBirthdate(e.target.value);
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    if (keyword) {
      const results = regions.filter((region) =>
        region.includes(keyword)
      );
      setFilteredRegions(results);
    } else {
      setFilteredRegions([]);
    }
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setSearchKeyword(region);
    setFilteredRegions([]);
  };

  return (
    <PageContainer>
      <Title>이거해줘</Title>
      <Form>
        <InputForm>
          <Label htmlFor="nickname">닉네임</Label>
          <Input 
            id="nickname" 
            placeholder="닉네임을 입력하세요."
            value={nickname}
            onChange={handleNicknameChange} />
        </InputForm>
        <InputForm>
          <Label htmlFor="region">지역</Label>
          <Input
            id="region"
            value={searchKeyword}
            onChange={handleSearch}
            placeholder="지역을 입력하세요."
          />
          {filteredRegions.length > 0 && (
            <SuggestionsList>
              {filteredRegions.map((region, index) => (
                <SuggestionItem
                  key={index}
                  onClick={() => handleRegionSelect(region)}
                >
                  {region}
                </SuggestionItem>
              ))}
            </SuggestionsList>
          )}
        </InputForm>
        <InputForm>
          <Label htmlFor="birthdate">생년월일</Label>
          <Input 
            id="birthdate" 
            placeholder="생년월일 8자리를 입력하세요(YYYYMMDD)"
            value={birthdate}
            onChange={handleBirthdateChange} />
        </InputForm>
        <InputForm>
          <Label>성별</Label>
          <GenderContainer>
            <GenderButton
              type="button"
              selected={selectedGender === "여성"}
              onClick={() => setSelectedGender("여성")}
            >
              여성
            </GenderButton>
            <GenderButton
              type="button"
              selected={selectedGender === "남성"}
              onClick={() => setSelectedGender("남성")}
            >
              남성
            </GenderButton>
          </GenderContainer>
        </InputForm>
        <SubmitButton type="submit">가입하기</SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default LoginInfoPage;
