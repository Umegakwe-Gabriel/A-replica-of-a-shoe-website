import React from "react";
import styled from "styled-components";

interface iBox {
    img?: any;
    icon?: any;
    write?: string;
    written?: string;
    price?: string;
}

const Box: React.FC<iBox>  = ({img, icon, write, written, price}) =>{ 
    return(
        <MainBox>
            <Ibox src={img}/>

            <FirstOne>
                <Icon>{icon}</Icon>
                <Write>{write}</Write>
            </FirstOne>

            <Written>{written}</Written>
            <Price>{price}</Price>
        </MainBox>
    )
}

export default Box;

const Price = styled.div`
color: red;
font-size: 18px;
font-weight: 650;
`
const Written = styled.div`
color: black;
font-size: 20px;
font-weight: 700;

`
const Write = styled.div`
color: silver;
font-size: 18px;
font-weight: 680;
`
const Icon = styled.div`
color: yellow;
font-size: 17px;
display: flex;
align-items: center;
`
const FirstOne = styled.div`
display: flex;
align-items: center;

`
const Ibox = styled.img`
width: 290px;
height: 300px;
background-color: silver;
object-fit: cover;
border: 1px solid silver;
border-radius: 15px;
`
const MainBox = styled.div`
margin-right: 25px;
flex-direction: column;

`

