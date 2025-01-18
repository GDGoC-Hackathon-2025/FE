import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FundingCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      key={item.id}
      onClick={() => {
        navigate(`/funding/${item.id}`);
      }}
    >
      <ImagePlaceholder>
        {item.uploadFileNames[0] === "No image found" ? (
          "No Image"
        ) : (
          <img src={item.uploadFileNames[0]} alt={item.pname} />
        )}
      </ImagePlaceholder>
      <CardContent>
        <CardTitle>{item.pname}</CardTitle>
        <CardPrice>가격: {item.price.toLocaleString()}원</CardPrice>

        <CardProgress>달성률: {item.percentage}%</CardProgress>
        <CardDescription>{item.pdesc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FundingCard;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2); /* 호버 시 더 뚜렷한 그림자 */
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardGoal = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardProgress = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
