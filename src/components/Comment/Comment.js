import React, { useState } from 'react';
import styled from "styled-components";
import {CommentOutlined, Favorite, SendRounded} from "@material-ui/icons";
import avatar from "../../assets/avatarPlaceholder.png";
import Input from "../Input/Input";
import {apiCall} from "../../utils/apiCall";


function Comment({id,userAvatar, author, content, commentsCount, likesCount, comments}){
    const [visible,setVisibility]=useState(false);
    const [commentsArr,setCommentsArr]=useState(comments);
    const [inputValue, setInputValue]=useState('');
    const sendComment = () =>{
        if(inputValue) {
            apiCall('post/comment', {data: {type:'comment',id: id.toString(), content:inputValue},token:localStorage.getItem("token")}).then(r=>{
                setCommentsArr(oldArray => [r,...oldArray]);
                setInputValue('');
            })
        }
    }
    return(
        <Wrapper>
            <CommentWrapper>
                <Image src={userAvatar} />
                <ContentWrapper>
                    <p className="commentAuthor">{author}</p>
                    <p>{content}</p>
                    <IconsWrapper>
                        <div><CommentIcon onClick={()=>setVisibility(!visible)} style={{ fontSize: 24 }}/>{commentsCount}</div>
                        <div><LikeIcon  style={{ fontSize: 24}}/>{likesCount}</div>
                    </IconsWrapper>
                </ContentWrapper>
            </CommentWrapper>
            {visible &&
            <NestedComments>
                <InputWrapper>
                    <CommentInput value={inputValue} onChange={evt => setInputValue(evt.target.value)} id="comment" placeholder="Reply to comment above..."/>
                    <SendIcon onClick={()=>sendComment()} style={{ fontSize: 30}}/>
                </InputWrapper>
                {commentsArr!==undefined &&
                    commentsArr.map(el=>{
                    let userAvatar = el.userAvatar === undefined ? avatar : el.userAvatar
                    return(
                        <Comment id={el._id} userAvatar={userAvatar} content={el.content} author={el.author.username} commentsCount={el.comments.length} likesCount={el.likes.length} likes={el.likes} comments={el.comments} key={el._id} />
                    )
                })}
            </NestedComments>}
        </Wrapper>

    )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin:5px 5px 5px 0;
`
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const ContentWrapper=styled.div`
    flex-direction: column;
    padding:10px;
    border-radius:10px;
    font-family: Roboto, sans-serif;
    background-color: ${props => props.theme.gray};
    color:${props => props.theme.primaryText};
    >p{
      margin:0;
      font-size:14px;
    }
    > p:first-of-type{
      margin-bottom: 3px;
      font-weight: 700;
    }
`
const NestedComments = styled.div`
padding-left:40px;
`
const Image = styled.img`
  width:30px;
  height:30px;
  margin-right:10px;
`
const IconsWrapper =styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-top:5px;
  color:${props => props.theme.primaryTextLight};
  >div{
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    font-family: Lora,serif;
    font-weight: 500;
    align-items: center;
    font-size: 14px;
    margin-right: 5px;
  }
`
const LikeIcon = styled(Favorite)`
  padding:2px;
  color:${props => props.theme.grayDark};
  margin-right:2px;
  border-radius:20px;
  :hover{
    color: ${props=>props.theme.tertiary};
    background-color: rgba(228, 88, 88, 0.1);
    cursor: pointer;
  }
`
const CommentIcon= styled(CommentOutlined)`
  padding:2px;
  color:${props => props.theme.grayDark};
  margin-right:2px;
  border-radius:20px;
  :hover{
    color: ${props=>props.theme.secondary};
    background-color: rgba(99, 71, 235, 0.1);
    cursor: pointer;
  }
`

const InputWrapper =styled.div`
  display: flex;
  margin-top:5px;
`
const CommentInput = styled(Input)`
  background-color: ${props => props.theme.gray};
  height:30px;
  width:80%;
`
const SendIcon = styled(SendRounded)`
  padding:2px;
  margin-left: 5px;
  color:${props => props.theme.primaryTextLight};
  cursor:pointer;
  :hover{
    color:${props => props.theme.secondary};
  }
`
export default Comment;