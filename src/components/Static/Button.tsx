import React from "react";
import styled from "styled-components"
import {BsArrowRightShort} from "react-icons/bs"

interface iButt {
    bc?: string;
    title?: string;
    icon?: any;
    ml?: string;
    b?: string;
    cc?: string;
}

const Button: React.FC<iButt> = ({bc,title, icon, ml, b, cc}) =>{
    return(
        <Container bc = {`${bc}`} ml= {`${ml}`} b={`${b}`}>
            <Main cc={`${cc}`}>
                {title}
            </Main>
            <Logo>{icon}</Logo>
        </Container>
    )
}

export default Button;

const Logo = styled.div`
background-color: white;
color: black;
border-radius: 50px;
height: 20px;
font-size: 20px;
`;

const Main = styled.div<{cc: string}>`
color: ${({cc})=>cc};
margin-left: 10px;
font-weight: 500;
margin-right: 10px;
`

const Container = styled.div<{bc: string,ml: string, b: string}>`
min-width: 130px;
height: 55px;
border-radius: 20px;
background-color: ${({bc})=>bc};
display: flex;
align-items: center;
margin-top: 50px;
margin-right: ${({ml})=>ml};
border: ${({b})=>b};
cursor: pointer;
transition: all 350ms;

:hover{
transform: scale(1.02);
}
`