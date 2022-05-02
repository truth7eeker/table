import { createSlice } from "@reduxjs/toolkit"
import  { getPosts } from "../../../api/getPosts"

const initialState = { 
    list: [], 
    status: null, 
    sortedBy: {
    id: true,
    title: false,
    body: false
    },
    input: '',
    found: [],
    startSearch: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        input: (state, {payload}) => {
            state.input = payload
        },
        search: state => {
            // clear prev results
            state.found = []
            // find the string
            state.list.map(post => post.title.includes(state.input) || 
            post.body.includes(state.input) && 
            state.found.push(post))
            state.startSearch = true
        },
        resetSearch: state => {
            state.found = []
            state.startSearch = false
            state.input = ''
        },
        sort: (state, {payload}) => {
            const isNum = payload === 'id' ? true : false
            const target = state.sortedBy[payload]

            if (isNum && !target) {
                state.list.sort((a, b) => a.id - b.id)
            }
            else if (isNum && target) {
                state.list.sort((a, b) => b.id - a.id)
            } 
            else if (!isNum && !target) {
                state.list.sort((a, b) => a[payload].localeCompare(b[payload]))
        
            } else if (!isNum && target) {
                state.list.sort((a, b) => b[payload].localeCompare(a[payload]))  
            }
            state.sortedBy[payload] = !target
        }
    },
    extraReducers: {
        [getPosts.pending]: state => {
            state.status ='loading'
        },
        [getPosts.fulfilled]: (state, action) => {
            state.list = action.payload
            state.status = 'success'
            state.sortedBy = {
                id: true,
                title: false,
                body: false
            }
        },
        [getPosts.rejected]: state => {
            state.status = 'failed'
        }
    }
})

export const { sort, input, search, resetSearch } = postsSlice.actions

export default postsSlice.reducer