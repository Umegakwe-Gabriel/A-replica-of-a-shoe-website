// import {useState} from "react";
import styled from "styled-components";
import { FaRunning, FaSwimmer, FaBed } from "react-icons/fa";

const data = [
    {id: 1, bt: "Free Shipping", st: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
    omnis.`, icon: <FaRunning/>},
    {id: 2, bt: "Secure Payments", st: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
    omnis.`, icon: <FaSwimmer/>},
    {id: 3, bt: "Love to help you", st: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
    omnis.`, icon: <FaBed/>},
]

const SmallBox = () => {
  return (
    <SecondBox>
      <Box>
        {
            data.map((props)=>(
                <Holder key={props.id}>
          <Icon ><FaRunning/></Icon>
            
          <BigTxt>{props.bt}</BigTxt>
          <SmallTxt>
            {props.st}
          </SmallTxt>
        </Holder>
            ))
        }
      </Box>
    </SecondBox>
  );
};

export default SmallBox;

const SmallTxt = styled.div`
margin-top: 17px;
color: silver;
font-size: 14px;
font-weight: 550;
margin-left: 30px;
width: 320px;
`;

const Holder = styled.div`
  margin-top: 10px;
  width: 360px;
  height: 210px;
  background-color: white;
  border-radius: 18px;
  padding-top: 50px;
  margin-right: 40px;
  border: 1px solid silver;
`;

const BigTxt = styled.div`
margin-top: 17px;
color: black;
font-size: 20px;
font-weight: bold;
margin-left: 30px;
`;

const Icon = styled.div`
  color: white;
  font-size: 30px;
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
`;

const Box = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SecondBox = styled.div`
  margin-top: 0px;
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
`;
