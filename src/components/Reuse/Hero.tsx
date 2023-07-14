import React from "react";
import styled from "styled-components";
import Button from "../Static/Button";
import shoe from "../../assets/red.jpg"
import shoe1 from "../../assets/fine shoe1.jpeg"
import shoe2 from "../../assets/fine shoe2.jpeg"
import shoe3 from "../../assets/red3.jpg"

const Hero = () => {

    const data = [
        {id: 1, num: "1k+", words: "Brands"},
        {id: 2, num: "500+", words: "Shops"},
        {id: 3, num: "250k+", words: "Customers"},
    ]

  return (
    <Container>
      <Main>
        <LeftSide>
          <SmallWrite>Our Summer Collections</SmallWrite>
          <BigWrite>The New Arrival</BigWrite>
          <AvgWrite>
            <span style={{ marginRight: "15px", color: "red" }}> Nike</span>
            {/* <p/> */}
            <span>Shoes</span>
          </AvgWrite>
          <LoremWrite>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            quaerat iusto cum, fugit veniam doloremque aut nostrum excepturi est
          </LoremWrite>
          <Button/>
          <Down>
          {
            data.map((props=>(
                <Numbers key={props.id}>
            <Number>{props.num}</Number>
            <Words>{props.words}</Words>
          </Numbers>
            )))
          }
          </Down>
        </LeftSide>
        <RightSide>
          <Shoe src={shoe2}/>
          <BoxHolder>
          <Boxes src = {shoe1}/>
          <Boxes src={shoe}/>
          <Boxes src={shoe3}/>
          </BoxHolder>
        </RightSide>

      </Main>
    </Container>
  );
};

export default Hero;

const BigWrite = styled.div`
  font-size: 80px;
  font-weight: 900;
  width: 790px;
  background-color: white;
`;

const SmallWrite = styled.div`
  color: red;
  margin-top: 60px;
  font-weight: 450;
`;

const AvgWrite = styled.div`
  font-size: 70px;
  font-weight: 900;
`;

const LoremWrite = styled.div`
width: 400px;
color: silver;
margin-right: 15px;
`;

const Down = styled.div`
display: flex;
`;

const Words = styled.div`
color: gray;
margin-top: 5px;
`;

const Number = styled.div`
font-size: 35px;
font-weight: 800;
display: flex;
`;

const Numbers = styled.div`
display: flex;
margin-top: 50px;
margin-right: 90px;
flex-direction: column;
`;

const LeftSide = styled.div`
width: 50%;
`;

const Boxes = styled.img`
width: 175px;
height: 140px;
border-radius: 10px;
margin-left: 50px;
margin-top: -30px;
object-fit: cover;
background-color: #b9b9b9;
`;

const Shoe = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
margin-left: 50px;
`;

const BoxHolder = styled.div`
display: flex;
`;

const RightSide = styled.div`
width: 50%;
`;

const Main = styled.div`
  width: 89%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  height: calc(90vh - 70px);
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(209, 211, 212, 1) 50%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
