import React, { useEffect } from 'react'
import { Section } from '../styles/components'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchPosts } from '../store/reducers/PostsActionCreators';
import styled from 'styled-components';
import PostItem from './PostItem';


const List = styled.ul`
    list-style-type: none;
`

const PostsList: React.FC = ({}) => {
    const dispatch = useAppDispatch();
    const {posts} = useAppSelector(state => state.postReducer);
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);




  return (
    <Section>
        <List>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </List>
    </Section>
  )
}

export default PostsList
