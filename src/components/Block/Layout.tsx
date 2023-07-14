import React from "react";
import styled from "styled-components"
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Hero from "../Reuse/Hero";
import SecondSide from "./SecondSide";
import NextSide from "./NextSide";
import SmallBox from "./SmallBox";
import Wear from "./Wear";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Footer from "./Footer";

const Layout = () =>{
    return(
        <Container>
            <Main>
                <Header/>
                <Hero/>
                <Outlet/>
                <SecondSide/>
                <NextSide/>
                <SmallBox/>
                <Wear/>
                <Box3/>
                <Box4/>
                <Footer/>
            </Main>
        </Container>
    )
}

export default Layout;

const Main = styled.div``

const Container = styled.div``