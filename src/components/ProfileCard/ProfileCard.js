import styled, {css} from "styled-components";
import React, {useState} from "react";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import {Favorite} from "@material-ui/icons";
import {apiCall} from "../../utils/apiCall";
import {useUser} from "../../context/UserContext";

function ProfileCard({userId,username,email,isFollowed,followersCount}){
    const user = useUser();
    const [followers,setFollowers] =useState(followersCount)
    const [followed,setFollowed] = useState(isFollowed)

    const follow = () =>{
        if(userId!==user._id){
            if(followed){
                apiCall(`user/${userId}/unfollow`, {data: {},token:localStorage.getItem("token")}).then(r=>{
                    setFollowed(false);
                    setFollowers(followers-1)
                })
            }
            else{
                apiCall(`user/${userId}/follow`,  {data: {},token:localStorage.getItem("token")}).then(r=>{
                    setFollowed(true);
                    setFollowers(followers+1)
                })
            }
        }
    }
    return (
        <Wrapper>
            <Image src={avatarPlaceholder} alt="avatar"/>
            <TextContainer>
                    <Username>{username}</Username>
                    <Text>{email}</Text>
                    <Text>Followers: {followers}</Text>
            </TextContainer>
            <FollowContainer>
                <LikeIcon onClick={()=>follow()} isFollowed={followed} style={{ fontSize: 64}}/>
            </FollowContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width:700px;
  max-width: 100%;
  margin-top:80px;
  background-color: ${props => props.theme.primary};
  border-radius:5px;
  margin-bottom:5px;
  padding:10px;
  box-shadow: 0 4px 6px 0 hsla(0,0%,0%,0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Image = styled.img`
  width:100px;
  height:100px;
  margin-right:5px;
`
const TextContainer = styled.div`

`
const FollowContainer = styled.div`
  display: flex;
  justify-content: end;
`
const LikeIcon = styled(Favorite)`
  padding:5px;
  color:${props => props.theme.grayDark};
  margin-right:5px;
  border-radius:20px;
  ${({ isFollowed }) =>
    isFollowed && css`
            background-color: rgba(228, 88, 88, 0.1);
            color: ${props=>props.theme.tertiary};
    `}
  :hover{
    color: ${props=>props.theme.tertiary};
    background-color: rgba(228, 88, 88, 0.1);
    cursor: pointer;
  }
`
const Username = styled.div`
  display: flex;
  font-size:24px;
  font-family: Lora,serif;
  font-weight: 500;
  color:${props =>props.theme.primaryText};
`
const Text =styled.div`
  font-family: Roboto,sans-serif;
`
export default ProfileCard