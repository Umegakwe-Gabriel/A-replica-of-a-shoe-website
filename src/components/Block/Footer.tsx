import React from "react";
import styled from "styled-components"
import img from "../../assets/logo.png"

const Footer = () =>{
    return(
        <Container>
            <Main>
                <Holder>
                <Logo src= {img}/>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nobis tempora rerum quaerat impedit dolor iure iusto similique </Text>
                </Holder>
                <Holder>
                    <BigTxt>Products</BigTxt>
                    <SmallTxt>shoes</SmallTxt>
                    <SmallTxt>canvas</SmallTxt>
                    <SmallTxt>crocks</SmallTxt>
                    <SmallTxt>slippers</SmallTxt>
                </Holder>
                <Holder>
                    <BigTxt>Help</BigTxt>
                    <SmallTxt>lorem</SmallTxt>
                    <SmallTxt>ipsum</SmallTxt>
                    <SmallTxt>avec</SmallTxt>
                    <SmallTxt>maducan fridn</SmallTxt>
                    <SmallTxt>awendern</SmallTxt>
                </Holder>
                <Holder>
                    <BigTxt>Get In Touch</BigTxt>
                    <SmallTxt>070740266444</SmallTxt>
                    <SmallTxt>08131608756</SmallTxt>
                </Holder>
            </Main>
        </Container>
    )
}

export default Footer;

const BigTxt = styled.div`
font-size: 19px;
font-weight: 550;
color: white;
`;
const SmallTxt = styled.div`
font-size: 17px;
font-weight: 350;
color: white;
`;
const Text = styled.div`
font-size: 17px;
font-weight: 350;
color: white;
width: 250px;
`;
const Logo = styled.img`
width: 160px;
`;
const Holder = styled.div`
display: flex;
flex-direction: column;
`;

const Main = styled.div`
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 300px;
display: flex;
justify-content: center;
background-color: black;
align-items: center;
`