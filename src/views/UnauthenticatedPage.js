import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import * as mq from "../styles/mediaQueries"
import RegisterForm from "../components/RegisterForm/RegisterForm";
const Container=styled.div`
  display: flex;
  justify-content:space-evenly;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${props => props.theme.gray};
`
const Wrapper = styled.div`
  max-width: 980px;
  margin-bottom:30px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  @media ${mq.small}{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
const TextWrapper=styled.div`
  padding:20px 12px;
  width: 400px;
  margin:0 50px;
  @media ${mq.extraSmall}{
    width:70%;
    margin:0 20px;
  }
  
`
const FormWrapper=styled.div`
background-color: ${props => props.theme.primary};
padding:24px;
width: 400px;
border-radius: 10px;
margin:0 50px;
box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
  @media ${mq.extraSmall}{
    width:70%;
    margin:0 20px;
  }
  
  
  
`
const InnerFormWrapper=styled.div`
border-bottom:2px solid ${props=>props.theme.grayDark};
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
  span{
    margin-top:15px;
    margin-bottom: 20px;
    align-self: center;
    color:${props=>props.theme.secondary};
  }
`
const ButtonWrapper=styled.div`
  margin-top:25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  `
const Heading=styled.h1`
  color:${props => props.theme.secondary};
  font-family:'Lora',serif;
  font-weight: 700;
  font-size:64px;
  margin-bottom: 10px;
  @media ${mq.small}{
    text-align: center;
  }
`
const Paragraph=styled.p`
margin-top:0;
color:${props => props.theme.primaryText};
font-size:32px;
font-family: 'Roboto',sans-serif;
font-weight: 400;
  @media ${mq.extraSmall}{
    font-size:24px;
  }
`
const ModalHeading=styled.h1`
  color:${props => props.theme.primaryText};
  font-family:'Lora',serif;
  font-weight: 700;
  font-size:24px;
  margin-bottom: 10px;
`
function UnauthenticatedPage(props) {
    return (
        <Container>
            <Wrapper>
                <TextWrapper>
                    <Heading>Talker</Heading>
                    <Paragraph>Connect with people all around the world. Discuss chat and share best moments of your life.</Paragraph>
                </TextWrapper>
                <FormWrapper>
                    <InnerFormWrapper>
                        <LoginForm/>
                        <span>Forgot your password?</span>
                    </InnerFormWrapper>
                    <ButtonWrapper>
                        <Modal buttonLabel="Create new account">
                            <ModalHeading>
                                Sign Up
                            </ModalHeading>
                            <RegisterForm/>
                        </Modal>
                    </ButtonWrapper>
                </FormWrapper>

            </Wrapper>
        </Container>
    );
}

export default UnauthenticatedPage;