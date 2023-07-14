import React from "react";
import styled from "styled-components";
import img from "../../assets/too.jpg";
import { AiFillStar } from "react-icons/ai";

const Box3 = () => {

    const data = [
        {id: 1, txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iuijotrg wdkoemkfkr asf reokfofrkt
        dolor recusandae asperiores ab.Aliquid iuijotrg wdkoemkfkr asf reokfofrkt
        dolor recusandae asperiores ab.`,  word: "lorem ipsium", btxt: "Moriach Brown" },
        {id: 2, txt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid iuijotrg wdkoemkfkr asf reokfofrkt
        dolor recusandae asperiores ab.Aliquid iuijotrg wdkoemkfkr asf reokfofrkt
        dolor recusandae asperiores ab.`,  word: "lorem ipsium", btxt: "Lota Mongsekar" }
    ]

  return (
    <Container>
      <Main>
        <UpHold>
          <BigTxt>
            What Our <span style={{ color: "red" }}>Customers</span> Say
          </BigTxt>
          <SmallTxt>
            
          </SmallTxt>
        </UpHold>
        <Hold>
        {
            data.map((props)=>(
                <DownHold key={props.id}>
          <Img src={img} />
          <Text>
            {props.txt}
          </Text>

          <Div>
            <Icon><AiFillStar/></Icon>
            <Word>{props.word}</Word>
          </Div>
          <BoldTxt>{props.btxt}</BoldTxt>
        </DownHold>
            ))
        }
        </Hold>
      </Main>
    </Container>
  );
};

export default Box3;
const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`;

const UpHold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const DownHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    margin-top: 30px;
`;
const SmallTxt = styled.div`
  width: 550px;
  margin-top: 3px;
  color: gray;
`;
const BigTxt = styled.div`
  font-size: 50px;
  margin-top: 40px;
  font-weight: bold;
  color: black;
`;
const BoldTxt = styled.div`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;
const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Icon = styled.div`
color: red;
display: flex;
align-items: center;
justify-content: center;
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  object-fit: cover;
`;
const Word = styled.div`
color: silver;
font-size: 14px;
margin-left: 4px;
`;
const Text = styled.div`
  width: 450px;
  margin-top: 3px;
  color: gray;
  display: flex;
  align-items: center;
  
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  background-color: #e9f2f5;
`;
