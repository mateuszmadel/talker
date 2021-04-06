import React, { useState } from 'react';
import styled, { css } from "styled-components";
import {CommentOutlined, Favorite, SendRounded} from "@material-ui/icons";
import avatar from "../../assets/avatarPlaceholder.png";
import Input from "../Input/Input";
import {apiCall} from "../../utils/apiCall";
import {useUser} from "../../context/UserContext";


function Comment({id,userAvatar, author, content, comments, likes}){
    const [visible,setVisibility]=useState(false);
    const [commentsArr,setCommentsArr]=useState(comments);
    const user =useUser();
    const [likesArr,setLikesArr]=useState(likes);
    const [inputValue, setInputValue]=useState('');
    const [isLiked, setIsLiked]=useState(likesArr.includes(user._id))

    const sendComment = () =>{
        if(inputValue) {
            apiCall('post/comment', {data: {type:'comment',id: id.toString(), content:inputValue},token:localStorage.getItem("token")}).then(r=>{
                setCommentsArr(oldArray => [r,...oldArray]);
                setInputValue('');
            })
        }
    }

    const likeComment = () =>{
        if(isLiked===true){
            apiCall('post/like', {data: {type:'comment',id: id.toString()},token:localStorage.getItem("token"),method:'DELETE'}).then(r=>{
                setLikesArr(r);
                setIsLiked(false);
            })
        }
        else{
            apiCall('post/like', {data: {type:'comment',id: id.toString()},token:localStorage.getItem("token")}).then(r=>{
                setLikesArr(r);
                setIsLiked(true);
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
                        <div><CommentIcon onClick={()=>setVisibility(!visible)} style={{ fontSize: 24 }}/>{commentsArr.length}</div>
                        <div><LikeIcon onClick={()=>likeComment()} isLiked={isLiked} style={{ fontSize: 24}}/>{likesArr.length}</div>
                    </IconsWrapper>
                </ContentWrapper>
            </CommentWrapper>
            {visible &&
            <NestedComments>
                <InputWrapper>
                    <CommentInput value={inputValue} onChange={evt => setInputValue(evt.target.value)} id="comment" placeholder="Reply to comment above..."/>
                    <SendIcon onClick={()=>sendComment()} style={{ fontSize: 30}}/>
                </InputWrapper>
                {commentsArr.map(el => {
                    let userAvatar = el.userAvatar === undefined ? avatar : el.userAvatar
                    return (
                        <Comment id={el._id} userAvatar={userAvatar} content={el.content} author={el.author.username}
                                 likes={el.likes} comments={el.comments} key={el._id}/>
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
  ${({ isLiked }) =>
          isLiked && css`
            background-color: rgba(228, 88, 88, 0.1);
            color: ${props=>props.theme.tertiary};
    `}
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