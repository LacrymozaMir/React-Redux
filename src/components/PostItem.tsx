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
    padding: 4px 12px;
`

interface IPostItem {
    post: IPost;
}

const PostItem: React.FC<IPostItem> = ({post}) => {

  return (
    <Post>
        <PostTitle>{post.id}. {post.title}</PostTitle>
        <Button>Delete</Button>
        <Button>Edit</Button>
    </Post>
  )
}

export default PostItem
