import React from 'react';
import {useUser} from "./context/UserContext";
import {useAuth} from "./context/AuthContext";
import Button from "./components/Button/Button";
import styled from "styled-components";
import HomePage from "./views/HomePage";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  
  background-color: ${props => props.theme.gray};
`
function AuthenticatedApp() {
    const user=useUser();
    const auth=useAuth();
    return (
        <Wrapper>
            hello {user.username}
            <Button onClick={auth.logout} color="secondary">Logout</Button>

            <HomePage/>
        </Wrapper>
    );
}

export default AuthenticatedApp;
