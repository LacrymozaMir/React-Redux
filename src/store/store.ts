import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from '../store/reducers/PostsSlice';
import authReducer from '../store/reducers/AuthSlice';

const rootReducer = combineReducers({
    postReducer,
    authReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];