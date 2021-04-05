import styled from 'styled-components';
import Input from '../Input/Input';
import avatar from '../../assets/avatarPlaceholder.png'
import {useUser} from "../../context/UserContext";
import {SendRounded} from "@material-ui/icons";
import Comment from "../Comment/Comment";
import {apiCall} from "../../utils/apiCall";
import {useState} from "react";

function CommentsSection({postId,isVisible,comments}){
    const user = useUser();
    const [commentsArr,setCommentsArr]=useState(comments);
    const userAvatar = user.userAvatar === undefined ? avatar : user.userAvatar;
    const [inputValue, setInputValue]=useState('');
    const sendComment = () =>{
        if(inputValue) {
            apiCall('post/comment', {data: {type:'post',id: postId.toString(), content:inputValue},token:localStorage.getItem("token")}).then(r=>{
                setCommentsArr(oldArray => [r,...oldArray]);
                setInputValue('');
            })
        }
    }

    return(
        <>
        {isVisible &&
        <Wrapper>
            <InputWrapper>
                <Image src={userAvatar}/>
                <CommentInput value={inputValue} onChange={evt => setInputValue(evt.target.value)} id="comment" placeholder="Write a comment..."/>
                <SendIcon  onClick={()=>sendComment()} style={{ fontSize: 30}}/>
            </InputWrapper>
            <CommentsWrapper>
                {commentsArr!==undefined && commentsArr.map(el=>{
                    let userAvatar = el.userAvatar === undefined ? avatar : el.userAvatar
                    return(
                        <Comment id={el._id} userAvatar={userAvatar} content={el.content} author={el.author.username} commentsCount={el.comments.length} likesCount={el.likes.length} comments={el.comments} key={el._id} />
                    )
                })}
            </CommentsWrapper>
        </Wrapper>
        }
        </>
    )

}

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  padding:15px 15px 0 15px;
  border-top:1px solid ${props=>props.theme.grayDark};
`
const InputWrapper =styled.div`
display: flex;
`
const CommentInput = styled(Input)`
  background-color: ${props => props.theme.gray};
  height:30px;
  width:80%;
`
const Image = styled.img`
  width:30px;
  height:30px;
  margin-right:10px;
`
const CommentsWrapper = styled.div`
  display:flex;
  flex-direction: column;
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


export default CommentsSection