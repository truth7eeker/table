import { createAsyncThunk } from "@reduxjs/toolkit"

    export const getPosts = createAsyncThunk('posts/getPosts', async (firstPost) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts?_start=${firstPost}&_limit=10`)
    const data = await response.json()
    return data
})
   
