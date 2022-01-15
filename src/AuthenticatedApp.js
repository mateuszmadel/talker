import React from 'react';
import styled from "styled-components";
import HomePage from "./views/HomePage";
import Navbar from "./components/Navbar/Navbar";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  
  background-color: ${props => props.theme.gray};
`
function AuthenticatedApp() {
    return (
        <Wrapper>
            <Navbar showSearch/>

            <HomePage/>
        </Wrapper>
    );
}

export default AuthenticatedApp;
