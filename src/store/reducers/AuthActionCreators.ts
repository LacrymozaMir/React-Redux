import { AppDispatch } from "../store";
import { authSlice } from "./AuthSlice";


export const authLogin = () => (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.login());
} 

export const authLogout = () => (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logout());
} 