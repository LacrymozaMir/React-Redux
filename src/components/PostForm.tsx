import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../hooks/redux'
import { flexColumn } from '../styles/fragments'
import { IPost } from '../types/posts'
import { createPost } from '../store/reducers/PostsActionCreators'
import { Button } from '../styles/components'

const Container = styled.section`
    margin-bottom: 16px;
`

const Form = styled.form`
    ${flexColumn}
    padding: 8px;
    
`

const Input = styled.input`
    font-size: 24px;
`


const PostForm = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');


    const createNewPost = (event: any) => {
        event.preventDefault();
        if (value.length) {
            const newPost: IPost = {id: Date.now(), title: value, completed: false}
            dispatch(createPost(newPost));
            setValue('');
        }
    }

  return (
    <Container>
        <Form onSubmit={createNewPost}>
            <Input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button>Create</Button>
        </Form>
    </Container>
  )
}

export default PostForm
