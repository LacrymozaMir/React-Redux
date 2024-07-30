import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostEdit } from "../../types/posts";


interface PostsState {
    posts: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsFetching(state){
            state.isLoading = true;
        },
        postsFetchingSuccesss(state, action: PayloadAction<IPost[]>){
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        postsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        },
        postDeleting(state, action: PayloadAction<number>){
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        postEditing(state, action: PayloadAction<IPostEdit>) {
            state.posts = state.posts.map(post =>
                post.id === action.payload.id 
                ? {...post, title: action.payload.title}
                : post
            )
        },
        postCompleting(state, action: PayloadAction<number>){
            state.posts = state.posts.map(post => 
                post.id === action.payload
                ? {...post, completed: !post.completed}
                : post
            )
        },
        postCreating(state, action: PayloadAction<IPost>) {
            state.posts = [...state.posts, action.payload];
        }
    }
})

export default postSlice.reducer;