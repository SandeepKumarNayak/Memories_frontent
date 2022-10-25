import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
function Posts({ setCurrentId }) {
  const { posts, isLoading } = useSelector((state) => state.posts);
  return isLoading ? ( <h1>Loding...</h1>):
  
    (<div className="grid md:grid-cols-2 sx:grid-cols-1">
      {posts.map((post) => (
        <div key={post._id}>
          <Post setCurrentId={setCurrentId} post={post} />
        </div>
      ))}
    </div>)
}

export default Posts;
