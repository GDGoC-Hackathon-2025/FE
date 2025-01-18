import React from 'react';
import styled from 'styled-components';
import NaverLogo from '../../assets/icons/NaverLogo.svg';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
`;

const Logo = styled.div`
 
    font-size: 54px;
    font-weight: bold;
    color: #343a40;
    font-family: "BagelFatOne-Regular";
    margin-bottom: 100px;

`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LoginButton = styled.a`
  display: flex;
  align-items: center;

  background-color: #03c75a;
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 500px;
  height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #02b54e;
  }
`;

const CommentDivider = styled.div`
  
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0; /* 위아래 여백 */
  `
  ;
const Line = styled.div`
  width: 100%;
  flex: 1;
  height: 1px;
  background-color: #ccc; /* 선 색상 */
`;

const DividerText = styled.span`
  margin: 0 10px; /* 텍스트와 선 사이의 간격 */
  font-size: 16px; /* 텍스트 크기 */
  color: #333; /* 텍스트 색상 */
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  `
  ;


const LoginPage = () => {
  return (
    <PageContainer>
      <Logo>
        이거해줘
      </Logo>
      <LoginContainer>
        <CommentDivider>
          <Line />
          <DividerText>소셜 로그인하기</DividerText>
          <Line />
        </CommentDivider>
        <LoginButton href="http://43.201.161.96:8080/oauth2/authorization/naver">
          <img src={NaverLogo} style={{ width: '25px', marginRight: '150px' }} />
          네이버로 시작하기
        </LoginButton>
      </LoginContainer>
    </PageContainer>
  );
};

export default LoginPage;
