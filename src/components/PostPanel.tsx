import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks/redux'
import { completeAllPost, deleteAllCompletedPost } from '../store/reducers/PostsActionCreators'
import { Button } from '../styles/components'

const Panel = styled.section`
    
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
