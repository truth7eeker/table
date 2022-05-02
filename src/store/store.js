import { configureStore } from "@reduxjs/toolkit"
import pageReducer  from "./reducers/pageSlice/pageSlice.js"
import postsReducer  from "./reducers/postsSlice/postsSlice.js"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        page: pageReducer,
    }
})