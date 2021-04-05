import styled from 'styled-components'
import { CommentOutlined, Favorite } from '@material-ui/icons';
import avatar from '../../assets/avatarPlaceholder.png'
import CommentsSection from "../CommentsSection/CommentsSection";
import {useState} from "react";

const exampleComments =[
    {id:1,author:"Jan Kowalski",commentsCount:8,likesCount:54, content:"komentarz 1", comments:[{id:3,author:"Norbert",commentsCount:1,likesCount:7, content:"I'm nested",comments:[{id:4,author:"Norbert",commentsCount:0,likesCount:3, content:"I'm nested level 2"}]}]},
    {id:2,author:"Kamil Ślimak",commentsCount:0,likesCount:372, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis nulla magna, a elementum justo sagittis ac. Morbi ultricies odio vel enim conseq"}
]
function Card(props){
    const userAvatar = props.avatar === undefined ? avatar : props.avatar;
    const [commentsVisibility,setCommentsVisibility]=useState(false);
    return (
        <Wrapper>
            <Heading>
                <Image src={userAvatar} alt="avatar"/>
                <div>
                    {props.author}
                    <span>{props.created}</span>
                </div>

            </Heading>
            <ContentWrapper>
                <div>{props.content}</div>
            </ContentWrapper>
            <Footer>
                <div><CommentIcon onClick={()=>setCommentsVisibility(!commentsVisibility)} style={{ fontSize: 40 }}/>{props.comments}</div>
                <div><LikeIcon  style={{ fontSize: 40}}/>{props.likes}</div>
            </Footer>
            <CommentsSection isVisible={commentsVisibility} comments={exampleComments}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary};
  max-width: 700px;
  border-radius:5px;
  margin:5px;
  padding:10px;
  box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
`
const Heading = styled.div`
  display:flex;
  font-size:18px;
  padding:20px;
  font-family: Lora,serif;
  font-weight: 600;
  color:${props =>props.theme.primaryText};
  > div{
    display:flex;
    flex-direction: column;
    > span {
      font-size:14px;
      font-weight: 500;
      color:${props =>props.theme.primaryTextLight};
    }  
  }
`
const ContentWrapper = styled.div`
  padding:20px 20px 0 20px;
  > div {
    font-family: Roboto,sans-serif;
    font-weight: 300;
    padding-bottom: 40px;
    border-bottom:1px solid ${props=>props.theme.grayDark};
  }
`
const Footer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
    > * {
      display:flex;
      font-family: Lora,serif;
      font-weight: 500;
      align-items: center;
      margin-right:40px;
      font-size: 32px;
      color:${props => props.theme.primaryTextLight};
      > * {
        padding:5px;
        color:${props => props.theme.grayDark};
        margin-right:5px;
        border-radius:20px;
      }
      
    }
`
const LikeIcon = styled(Favorite)`
  :hover{
    color: ${props=>props.theme.tertiary};
    background-color: rgba(228, 88, 88, 0.1);
    cursor: pointer;
  }
`
const CommentIcon= styled(CommentOutlined)`
  :hover{
    color: ${props=>props.theme.secondary};
    background-color: rgba(99, 71, 235, 0.1);
    cursor: pointer;
  }
`
const Image = styled.img`
  width:50px;
  height:50px;
  margin-right:15px;
`


export default Card;