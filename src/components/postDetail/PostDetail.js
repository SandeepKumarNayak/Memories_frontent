import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostDetail() {
  const {id} = useParams();
  const {posts} = useSelector((state)=>state.posts);
  const post = posts.find((post)=>post._id === id);
  console.log(post);

  return (
    <div>
      <div className=''>
      hello world
      </div>
    </div>
  )
}

export default PostDetail
