import styled from 'styled-components';
import Input from '../Input/Input';
import avatar from '../../assets/avatarPlaceholder.png'
import {useUser} from "../../context/UserContext";
import {SendRounded} from "@material-ui/icons";
import Comment from "../Comment/Comment";

function CommentsSection({isVisible,comments}){
    const user = useUser();
    const userAvatar = user.userAvatar === undefined ? avatar : user.userAvatar;
    return(
        <>
        {isVisible &&(
        <Wrapper>
            <InputWrapper>
                <Image src={userAvatar}/>
                <CommentInput id="comment" placeholder="Write a comment..."/>
                <SendIcon style={{ fontSize: 30}}/>
            </InputWrapper>
            <CommentsWrapper>
                {comments.map(el=>{
                    let userAvatar = el.userAvatar === undefined ? avatar : el.userAvatar
                    return(
                        <Comment userAvatar={userAvatar} content={el.content} author={el.author} commentsCount={el.commentsCount} likesCount={el.likesCount} comments={el.comments} key={el.id} />
                    )
                })}
            </CommentsWrapper>
        </Wrapper>)
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