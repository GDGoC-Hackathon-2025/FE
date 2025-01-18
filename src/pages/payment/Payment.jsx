import React, { useState } from "react";
import styled from "styled-components";
import naverpay from "../../assets/images/naverpay.png";
import tosspay from "../../assets/images/tosspay.png";

import loading from "../../assets/images/loading.gif";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const tossPayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(-1);
    }, 2000); // 3000ms = 3초
  };
  return (
    <Container>
      {/* 로딩 오버레이 */}
      {isLoading && (
        <Overlay>
          <Spinner />
          <LoadingText>결제 중...</LoadingText>
        </Overlay>
      )}
      <Section>
        <SectionTitle>결제 방법</SectionTitle>
        <PaymentMethods>
          <PaymentMethod highlight>신용카드</PaymentMethod>
          <PaymentMethod highlight>현대카드</PaymentMethod>
          <PaymentMethod>계좌이체</PaymentMethod>
          <PaymentMethod>무통장입금</PaymentMethod>

          <PaymentMethod onClick={tossPayClick}>
            <img src={tosspay} style={{ width: "20px" }} alt="Toss Pay Logo" />
            Toss Pay
          </PaymentMethod>
          <PaymentMethod>
            <img src={naverpay} style={{ width: "20px" }} alt="N Pay Logo" />
            {"Pay"}
          </PaymentMethod>
        </PaymentMethods>
        <PaymentDetails>
          <p>현대카드 : 2% 청구할인</p>
          <p>국민카드 : 1% 청구할인</p>
          <p>토스페이 : 첫 결제 3천원 캐시백</p>
          <p>신용카드 무이자 할부 안내</p>
        </PaymentDetails>
      </Section>

      <Section>
        <SectionTitle>품절시 환불 방법</SectionTitle>
        <RefundPolicy>
          <p>결제하신 수단으로 취소됩니다.</p>
          <ul>
            <li>
              입점업체 배송은 낮은 확률로 상품이 품절될 가능성이 있습니다. 이에
              품절 시 빠르게 환불 처리해드립니다.
            </li>
            <li>
              현금 환불의 경우, 예금정보가 일치하지 않을 처리기 가능성이
              있습니다. 은행명, 계좌번호, 예금주명을 정확히 기재 부탁드립니다.
            </li>
            <li>
              환불 요청 날짜 기준으로 3~5일(주말 제외) 후 결제처에서 처리 완료
              시 고객님의 계좌로 환불 처리됩니다.
            </li>
          </ul>
        </RefundPolicy>
      </Section>
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 50px;
  font-family: Arial, sans-serif;
  color: #333;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PaymentMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const PaymentMethod = styled.div`
  padding: 14px 24px;
  color: #303030;
  border-radius: 5px;
  background-color: #f7f7f7;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: auto;
    margin-right: 5px;
  }
  transition: 0.2s;
  &:hover {
    background-color: #eeeeee;
  }
`;

const PaymentDetails = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #555;

  p {
    margin: 5px 0;
  }
`;

const RefundPolicy = styled.div`
  font-size: 14px;
  color: #62686e;

  p {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;

    li {
      margin-bottom: 8px;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
  margin-right: 20px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
