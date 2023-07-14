import React from "react";
import styled from "styled-components";
import Image from "../../Pages/Image";
import bg from "../../assets/rest snikers.jpeg";
import bg1 from "../../assets/white side left.jpeg";
import bg2 from "../../assets/white side left.jpeg";
import Button from "../Static/Button";
import { BsArrowRightShort } from "react-icons/bs";

const Wear = () => {
  return (
    <Container>
      <Main>
        <RLeft>
          <Image1Hold>
            <Image img={bg} />
            <Image img={bg1} />
          </Image1Hold>
          <Image2Hold>
            <img src={bg2} alt="" />
          </Image2Hold>
        </RLeft>
        <Right>
          
            <BTxt>
              <span style={{ color: "red" }}>Special</span> Offer
            </BTxt>

            <Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              veniam quibusdam soluta! Autem odio, perferendis, quis recusandae
              fugit perspiciatis ullam nisi debitis exercitationem architecto
              modi sed animi suscipit iste dignissimos.
            </Content>
            <Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              laboriosam numquam quaerat dignissimos pariatur vel inventore amet
            </Content>
          <BHold>
          <Button icon={<BsArrowRightShort/>} title="shop now" bc="red" ml="20px" cc="white"/>
          <Button title="Get Yours Now now" bc="white" ml="20px" b="1px solid silver" cc="silver"/>
          </BHold>
        </Right>
      </Main>
    </Container>
  );
};

export default Wear;

const BHold = styled.div`
display: flex;
`;
const Image1Hold = styled.div`
  display: flex;
`;
const Image2Hold = styled.div`
  width: 535px;
  height: 250px;
  margin-top: 25px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const BTxt = styled.div`
  font-size: 60px;
  font-weight: 900;
`;
const Content = styled.div`
  margin-top: 30px;
  color: grey;
  font-size: 20px;
  font-weight: 500;
  width: 550px;

`;
const Right = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-left: 240px;
`;
const RLeft = styled.div`
  width: 400px;
`;
const Main = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  min-height: 500px;
  align-items: center;
  display: flex;
  justify-content: center;

  /* background-color: orange; */
`;
