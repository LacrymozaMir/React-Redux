import React from 'react'
import styled from 'styled-components'
import { IPost } from '../types/posts'
import { flexRow } from '../styles/fragments';

export const Post = styled.article`
    ${flexRow}
`

const PostTitle = styled.h3`
    
`

const Button = styled.button`
  padding: 4px 8px;
  background: transparent;
  border: 1px solid gray;
  margin-left: auto;
  transition: 0.3s ease;

  &:hover {
    background: gray;
  }
`

interface IPostItem {
    post: IPost;
}

const PostItem: React.FC<IPostItem> = ({post}) => {

  return (
    <Post>
        <PostTitle>{post.id}. {post.title}</PostTitle>
        <div style={{marginLeft: 'auto'}}>
          <Button>Delete</Button>
          <Button>Edit</Button>
        </div>
    </Post>
  )
}

export default PostItem
