import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks/redux'
import { completeAllPost, deleteAllCompletedPost } from '../store/reducers/PostsActionCreators'

const Panel = styled.section`
    
`

const Button = styled.button`
    padding: 4px 16px;
    font-size: 18px;
    margin: 4px;
    background: transparent;
    transition: 0.3s ease-out;


    &:hover {
        background: gray;
    }
`


const PostPanel = () => {
    const dispatch = useAppDispatch();

    const completeAll = () => {
        dispatch(completeAllPost());
    }

    const deleteAllCompleted = () => {
        dispatch(deleteAllCompletedPost());
    }

  return (
    <Panel>
      <Button onClick={completeAll}>Complete all</Button>
      <Button onClick={deleteAllCompleted}>Delete all completed</Button>
    </Panel>
  )
}

export default PostPanel
