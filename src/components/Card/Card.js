import styled from 'styled-components'
import { CommentOutlined, Favorite } from '@material-ui/icons';
import avatarPlaceholder from '../../assets/avatarPlaceholder.png'
import CommentsSection from "../CommentsSection/CommentsSection";
import {useState} from "react";
import timeSince from "../../utils/timeSince";
function Card({id,author,created,avatar,content,commentsCount,likesCount,comments,likes}){
    const userAvatar = avatar === undefined ? avatarPlaceholder : avatar;
    const [commentsVisibility,setCommentsVisibility]=useState(false);
    return (
        <Wrapper>
            <Heading>
                <Image src={userAvatar} alt="avatar"/>
                <div>
                    {author}
                    <span>{timeSince(new Date(created))} ago</span>
                </div>

            </Heading>
            <ContentWrapper>
                <div>{content}</div>
            </ContentWrapper>
            <Footer>
                <div><CommentIcon onClick={()=>setCommentsVisibility(!commentsVisibility)} style={{ fontSize: 40 }}/>{commentsCount}</div>
                <div><LikeIcon  style={{ fontSize: 40}}/>{likesCount}</div>
            </Footer>
            <CommentsSection postId={id} isVisible={commentsVisibility} comments={comments}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary};
  width:66%;
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