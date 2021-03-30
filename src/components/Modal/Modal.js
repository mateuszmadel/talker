import React,{useState} from 'react';
import Button from "../Button/Button";
import styled from "styled-components";
const Container =styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`
const Content= styled.div`
  background-color: ${props => props.theme.primary};
  padding:20px;
  width: 400px;
  border-radius: 10px;
  margin:30px auto;
  box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
  max-width: 100%;
  max-height: 100%;
`
const ButtonWrapper =styled.div`
display:flex;
flex-direction: row-reverse;

`
function Modal(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Button  onClick={()=>setIsOpen(true)} color="tertiary">{props.buttonLabel}</Button>
            {isOpen &&
                <Container onClick={()=>setIsOpen(false)}>
                    <Content onClick={e => {e.stopPropagation()}}>
                        <ButtonWrapper>
                            <Button color="tertiary" small onClick={()=>setIsOpen(false)}>&times;</Button>
                        </ButtonWrapper>
                        {props.children}
                    </Content>
                </Container>
            }

        </div>
    );
}

export default Modal;