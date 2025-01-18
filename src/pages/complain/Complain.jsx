import React from "react";
import styled from "styled-components";
import PopularComplain from "./PopularComplain";
import CommonComplain from "./CommonComplain";

import WritingIcon from "../../assets/icons/WritingIcon.svg";
import { useNavigate } from "react-router-dom";
const ComplainPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <GotoComplain
        onClick={() => {
          navigate("/complain/create");
        }}
      >
        <img className="write" src={WritingIcon} alt="writing complain" />
      </GotoComplain>
      <PopularComplain />
      <Divider></Divider>
      <CommonComplain />
    </Wrapper>
  );
};

export default ComplainPage;
const GotoComplain = styled.div`
  position: fixed;
  bottom: 50px;
  right: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #3498db;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.2s ease;
  .write {
    width: 40px;
  }
  &:hover {
    background-color: #2980b9;
  }
`;
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
