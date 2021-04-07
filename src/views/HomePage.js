import React, {useEffect, useState} from "react";
import {apiCall} from '../utils/apiCall';
import Card from "../components/Card/Card";
import PostForm from "../components/PostForm/PostForm";
import Modal from "../components/Modal/Modal"
import styled from "styled-components";

function HomePage(props){
   const [posts, setPosts] = useState([]);

   useEffect(()=>{
      apiCall('post/getall',{token:localStorage.getItem("token")})
          .then(r=> setPosts(r));
   },[])

   return(
       <Wrapper>
           <Modal createPost buttonLabel="Share your thoughts...">
               <ModalHeading>
                   Create post
               </ModalHeading>
               <PostForm/>
           </Modal>
          {posts.length&&
              posts.map(post=>(
                  <Card key={post._id} id={post._id} author={post.author.username} content={post.content}
                        likes={post.likes} created={post.created_at} comments={post.comments}
                  />
              ))
       }
       </Wrapper>
   )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
   width:700px;
  min-width: 50%;
  background-color: ${props => props.theme.gray};
`
const ModalHeading=styled.h1`
  text-align: center;
  color:${props => props.theme.primaryText};
  font-family:'Lora',serif;
  font-weight: 700;
  font-size:24px;
  margin-bottom: 10px;
`
export default HomePage;