import React from 'react'
import styled from 'styled-components';

const Box4 = () => {
  return (
    <div>
        <Container>
            <Main>
                <LeftSide>Sign Up for <b style={{color: "red"}}>Updates</b> and NewsLetter</LeftSide>
                <RightSide>
                    <Input placeholder='lorem ipsum avec '/>
                    <Button>Sign Up</Button>
                </RightSide>
            </Main>
        </Container>
    </div>
  )
}

export default Box4;

const Button = styled.div`
position: absolute;
background-color: red;
border-radius: 20px;
height: 60px;
margin-left: 300px;
width: 140px;
display: flex;
justify-content: center;
align-items: center;
font-size: 21px;
font-weight: 600;
color: white;
`
const Input = styled.input`
width: 400px;
height: 40px;
padding: 10px;
color: silver;
border: 1px solid grey;
border-radius: 20px;
position: relative;
`
const RightSide = styled.div`
display: flex;
align-items: center;
margin-top: 40px;
`
const LeftSide = styled.div`
font-size: 40px;
color: black;
width: 450px;
font-weight: 650;
`
const Main = styled.div`
width: 89%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
`