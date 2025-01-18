import React from "react";
import styled from "styled-components";
import PopularComplain from "./PopularComplain";
import CommonComplain from "./CommonComplain";

const ComplainPage = () => {
  return (
    <Wrapper>
      <PopularComplain />
      <Divider></Divider>
      <CommonComplain />
    </Wrapper>
  );
};

export default ComplainPage;

const Wrapper = styled.div`
  width: 80vw;
  margin: 50px auto;
`;
const Divider = styled.div`
  margin: 30px auto;
  width: 1000px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;
