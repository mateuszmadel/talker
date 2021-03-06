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
  max-width: 80%;
`
const ButtonWrapper =styled.div`
display:flex;
flex-direction: row-reverse;
justify-content: space-between;
`
function Modal(props) {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal=(post)=>{
        setIsOpen(false);
        if(!props.registerModal && post && post.author){
            props.onCloseModal(post)
        }
    }
    return (
        <div>
            <Button createPost={props.createPost} onClick={()=>setIsOpen(true)} color="tertiary">{props.buttonLabel}</Button>
            {isOpen &&
                <Container onClick={()=>setIsOpen(false)}>
                    <Content data-testid="modal" onClick={e => {e.stopPropagation()}}>
                        <ButtonWrapper>
                            <Button color="tertiary" small onClick={closeModal}>&times;</Button>
                            {!props.registerModal &&<ModalHeading>
                                Create post
                            </ModalHeading>}
                        </ButtonWrapper>
                        {
                            React.Children.map(props.children, (child) =>
                                React.cloneElement(child, {
                                    closeModal
                                })
                            )
                        }


                    </Content>
                </Container>
            }

        </div>
    );
}
const ModalHeading=styled.h1`
  text-align: center;
  color:${props => props.theme.primaryText};
  font-family:'Lora',serif;
  font-weight: 700;
  font-size:20px;
  margin: 0;
`
export default Modal;