import React from 'react';
import {useUser} from "./context/UserContext";
import {useAuth} from "./context/AuthContext";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  background-color: ${props => props.theme.gray};
`
function AuthenticatedApp() {
    const user=useUser();
    const auth=useAuth();
    return (
        <Wrapper>
            hello {user.username}
            <Button onClick={auth.logout} color="secondary">Wyloguj</Button>
            <Card author="Mateusz Mądel" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis nulla magna, a elementum justo sagittis ac. Morbi ultricies odio vel enim consequat, sed ornare nulla mattis. Quisque ornare magna non libero interdum, vitae euismod nibh commodo. Cras porta turpis ut risus malesuada vulputate."
                likes="31" comments="2" created="5h ago"
            />
        </Wrapper>
    );
}

export default AuthenticatedApp;