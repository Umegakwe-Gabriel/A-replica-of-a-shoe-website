import React from "react";
import styled from "styled-components";
// import Box from "../Static/Box";
import img0 from "../../assets/white side left.jpeg";
import img1 from "../../assets/white casual.jpeg";
import img2 from "../../assets/white main.jpeg";
import img3 from "../../assets/rest snikers.jpeg";
import { AiFillStar } from "react-icons/ai";
import Box from "../Static/Box";

const SecondSide = () => {
  return (
    <Container>
      <Main>
        <FirstWrite>
          Our <span style={{ color: "red" }}>Popular</span> Product
        </FirstWrite>
        <SecondWrite>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim totam
          numquam amet.lorem asadeeikjih jutghujhrfdf 
        </SecondWrite>

        <BoxHolder>
          <Box img={img0} icon={<AiFillStar/>} price="$200.20" write="lorem" written="Nike Air Landing-001"/>
          <Box img={img1} icon={<AiFillStar/>} price="$210.20" write="lorem" written="Nike Air Landing-001"/>
          <Box img={img2} icon={<AiFillStar/>} price="$230.20" write="lorem" written="Nike Air Landing-001"/>
          <Box img={img3} icon={<AiFillStar/>} price="$250.20" write="lorem" written="Nike Air Landing-001"/>
        </BoxHolder>
      </Main>
    </Container>
  );
};

export default SecondSide;

const BoxHolder = styled.div`
  display: flex;
  margin-top: 40px;
`;
const SecondWrite = styled.div`
  color: silver;
  margin-top: 5px;
  width: 420px;
`;
const FirstWrite = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 900;
  margin-top: 30px;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
