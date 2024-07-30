import React, { useState } from 'react'
import styled from 'styled-components'
import { IPost } from '../types/posts'
import { flexRow } from '../styles/fragments';
import { useAppDispatch } from '../hooks/redux';
import { postSlice } from '../store/reducers/PostsSlice';
import { deletePost, editingPost } from '../store/reducers/PostsActionCreators';

export const Post = styled.article`
  ${flexRow}
`

const PostTitle = styled.h3`
  cursor: pointer;
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

const Input = styled.input`
  min-width: 400px;
  font-size: 24px;
`

interface IPostItem {
  post: IPost;
}

const PostItem: React.FC<IPostItem> = ({post}) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');

  const postDelete = () => {
    dispatch(deletePost(post.id));
  }

  const startEditing = () => {
    setIsEditing(true);
    setEditValue(post.title);
  }

  const endEditing = () => {
    setIsEditing(false);
    if(editValue){
      dispatch(editingPost(post.id, editValue));
    }
  }

  return (
    <Post>
      {isEditing 
        ? <Input
            type='text'
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        : <PostTitle>{post.id}. {post.title}</PostTitle>
      }
      <div style={{marginLeft: 'auto'}}>
        <Button onClick={postDelete}>Delete</Button>
        {isEditing
        ? <Button onClick={endEditing}>Okay</Button>
        : <Button onClick={startEditing}>Edit</Button>

        }
      </div>
    </Post>
  )
}

export default PostItem;
