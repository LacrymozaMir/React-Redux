import { AppDispatch } from "../store";
import { postSlice } from "./PostsSlice";
import axios from "axios";
import { IPost } from "../../types/posts";


export const fetchPosts = () => async (dispatch: AppDispatch) => {
    try{
        dispatch(postSlice.actions.postsFetching());
        const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos/?userId=1');
        dispatch(postSlice.actions.postsFetchingSuccesss(response.data));

    } catch(error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const deletePost = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postDeleting(id));

    } catch(error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const editingPost = (id: number, title: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postEditing({id, title}));

    } catch(error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const completingPost = (id: number) => (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postCompleting(id));

    } catch (error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const createPost = (post: IPost) => (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postCreating(post));

    } catch (error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const completeAllPost = () => (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsCompletingAll());

    } catch (error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}

export const deleteAllCompletedPost = () => (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postDeletingCompletedAll());

    } catch (error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}