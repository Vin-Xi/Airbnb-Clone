import { configureStore } from "@reduxjs/toolkit";
import { savedReducer } from "./reducers/savedReducer";
 const store = configureStore({
    reducer:{
        saved:savedReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store