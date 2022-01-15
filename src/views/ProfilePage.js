import React, {useEffect, useState} from "react";
import {apiCall} from '../utils/apiCall';
import Card from "../components/Card/Card";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {useUser} from "../context/UserContext";

function ProfilePage(props){
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null)
    const currentUser = useUser();
    const params = useParams();
    useEffect(()=>{
        apiCall(`user/${params.userId}`,{token:localStorage.getItem("token")})
            .then(r=> setUser(r));
        apiCall(`post/getByUser/${params.userId}`,{token:localStorage.getItem("token")})
            .then(r=> setPosts(r));
    },[])

    return(
        <Page>
            <Navbar/>
            {user && <ProfileCard
                userId={user._id}
                username={user.username}
                email={user.email}
                followersCount={user.followers.length}
                isFollowed={user.followers.find(el=>el === currentUser._id)}
            />}
            <Wrapper>
                {posts.length&&
                posts.map(post=>(
                    <Card key={post._id} id={post._id} author={post.author.username} content={post.content}
                          likes={post.likes} created={post.created_at} comments={post.comments} image={post.image}
                    />
                ))
                }
            </Wrapper>
        </Page>
    )
}
const Wrapper = styled.div`
  margin-top:50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
   width:700px;
  min-width: 50%;
  max-width: 100%;
  background-color: ${props => props.theme.gray};
`
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  
  background-color: ${props => props.theme.gray};
`
export default ProfilePage;
