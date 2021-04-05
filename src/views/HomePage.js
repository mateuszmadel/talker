import React, {useEffect, useState} from "react";
import {apiCall} from '../utils/apiCall';
import Card from "../components/Card/Card";
function HomePage(props){
   const [posts, setPosts] = useState([]);

   useEffect(()=>{
      apiCall('post/getall',{token:localStorage.getItem("token")})
          .then(r=>setPosts(r));
   },[])

   return(
       <>
          {posts.length&&
              posts.map(post=>(
                  <Card key={post._id} id={post._id} author={post.author.username} content={post.content}
                        likesCount={post.likes.length} likes={post.likes} commentsCount={post.comments.length} created={post.created_at} comments={post.comments}
                  />
              ))
       }
       </>
   )
}

export default HomePage;