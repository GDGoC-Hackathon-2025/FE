import React, { useState, useEffect } from 'react';
import './css/OrderComponent.css';
import { createOrder } from '../../api/OrderAPI';

const OrderComponent = ({
  initialOrderData = { memberId: 1, productId: 14 },
  onOrderComplete,
}) => {
  const [orderData, setOrderData] = useState(initialOrderData);

  // initialOrderData가 변경될 때마다 상태를 업데이트
  useEffect(() => {
    console.log('initialOrderData 변경됨:', initialOrderData);
    setOrderData(initialOrderData);
  }, [initialOrderData]);

  // 주문 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API 호출을 통해 주문 생성
      const response = await createOrder(orderData); // 업데이트된 orderData 사용
      console.log('주문 응답:', response);
      onOrderComplete?.(response); // 부모 컴포넌트에 주문 완료 알림 (옵셔널 호출)
    } catch (error) {
      console.error('주문 생성 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div className='order-container'>
      <h2>주문하기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>회원 ID:</label>
          <div>{orderData.memberId || '알 수 없음'}</div>
        </div>
        <div>
          <label>상품 ID:</label>
          <div>{orderData.productId || '선택된 상품이 없습니다.'}</div>
        </div>
        <button type='submit'>주문 완료</button>
      </form>
    </div>
  );
};

export default OrderComponent;