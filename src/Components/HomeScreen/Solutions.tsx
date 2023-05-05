/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
const Solutions = () => {
  const [show, setShow] = useState<Boolean>(true);
  const [show2, setShow2] = useState<Boolean>(false);
  const [show3, setShow3] = useState<Boolean>(false);

  const Toogle = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
  };
  const Toogle2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
  };
  const Toogle3 = () => {
    setShow3(true);
    setShow2(false);
    setShow(false);
  };
  return (
    <Container>
      <h1>Atlassian solutions are designed for all types of work</h1>
      <ButtonHold>
        <Button bg={show ? "" : "tt"} onClick={Toogle}>
          Work Management
        </Button>
        <Button bg={show2 ? "" : "tt"} onClick={Toogle2}>
          IT service Management
        </Button>
        <Button bg={show3 ? "" : "ee"} onClick={Toogle3}>
          Agile and Devops
        </Button>
      </ButtonHold>
      {show ? <CardOne /> : null}
      {show2 ? <CardTwo /> : null}
      {show3 ? <CardThree /> : null}
    </Container>
  );
};

export default Solutions;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding-bottom: 20px; */
  @media screen and (max-width: 500px) {
    margin-top: 190px;
    align-items: center;
    justify-content: center;

    h1 {
      margin-left: 20px;
      font-size: 65%;
    }
  }
`;
const ButtonHold = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    /* margin: 20px; */
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    margin-right: 35px;
  }
`;
const Button = styled.button<{ bg: string }>`
  width: 350px;
  height: 95px;
  background-color: ${({ bg }) => (bg ? "#deebff" : "#0052cc")};
  border-radius: 50px;
  color: ${({ bg }) => (bg ? "#0052cc" : "#deebff")};
  border: none;
  font-size: 21px;
  margin-left: 25px;
  cursor: pointer;
  transition: all 350ms;

  @media screen and (max-width: 500px) {
    margin: 20px;
    margin-left: 90px;
    width: 90%;
  }
`;
