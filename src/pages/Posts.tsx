import React from 'react'
import PostsList from '../components/PostsList'
import PostForm from '../components/PostForm'
import PostPanel from '../components/PostPanel'



const Posts = () => {
    
  return (
    <div>
      <PostForm/>
      <PostPanel/>
      <PostsList/>
    </div>
  )


}

export default Posts
