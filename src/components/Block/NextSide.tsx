import React from "react";
import styled from "styled-components";
import img1 from "../../assets/2white.jpg"

const NextSide = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <MainW>
            We Provide You <span style={{ color: "red" }}> Super Quality</span>{" "}
            Shoes
          </MainW>

          <NextWrite>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            recusandae, modi quaerat eveniet vel voluptate veritatis tempore,
            dolorem cupiditate officia velit maiores, nam eos quo ex. Voluptates
            doloremque dicta pariatur!
          </NextWrite>
          <DNextWrite>
          recusandae, modi quaerat eveniet vel voluptate veritatis tempore,
            dolorem cupiditate officia velit maiores, nam eos quo ex. 
          </DNextWrite>

          <Button>
            <Write>Our details</Write>
          </Button>
        </LeftSide>
        
        <RightSide src={img1}/>
      </Main>
    </Container>
    
  );
};

export default NextSide;


const Write = styled.div`
color: white;
font-weight: 500;
font-size: 17px;
`;
const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 140px;
background-color: red;
height: 50px;
margin-top: 15px;
border-radius: 15px;
cursor: pointer;
`;

const DNextWrite = styled.div`
margin-top: 25px;
width: 600px;
color: #a7a7a7;`;
const NextWrite = styled.div`
margin-top: 25px;
width: 600px;
color: #a7a7a7;
`;
const MainW = styled.div`
  font-size: 60px;
  font-weight: 1000;
  width: 700px;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const RightSide = styled.img`
 width: 609px;
height: 470px;
object-fit: cover;
background-color: silver; 
margin-left: 40px;
border-radius: 15px;
object-fit: cover;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;

`;

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
