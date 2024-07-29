import { error } from "console";
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

export const editingPost = (id: number, value: string) => async (dispatch: AppDispatch) => {
    try {


    } catch(error) {
        if (error instanceof Error){
            dispatch(postSlice.actions.postsFetchingError(error.message));
        }
    }
}