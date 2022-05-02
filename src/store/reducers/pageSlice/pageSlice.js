import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'currPage',
    initialState: {
        currPage: 1,
        firstPost: 0,
        pages: [1, 2, 3, 4, 5]
    },
    reducers: {
        increment: (state) => {
            const lastIndex = state.pages[state.pages.length - 1]
        
            if (state.currPage > 9) {
                return
            } 
            else if (state.currPage === lastIndex) {
                state.pages.shift()
                state.pages.push(lastIndex + 1)
                state.currPage++
                state.firstPost  = state.currPage * 10 - 10
            }  
            else {
                state.currPage++
                state.firstPost  = state.currPage * 10 - 10
            }
        },
        decrement: (state) => {
            const firstIndex = state.pages[0]
            if (state.currPage <= 1) {
                return
            } 
            else if (state.currPage === firstIndex) {
                state.pages.pop()
                state.pages.unshift(firstIndex - 1)
                state.currPage--
                state.firstPost  = state.currPage * 10 - 10
            }  
            else {
                state.currPage--
                state.firstPost  = state.currPage * 10 - 10
            }
            
        },
        changePage: (state, {payload}) => {
            const currDigit = payload.digit
            const postIndex = payload.index
            const firstIndex = state.pages[0]
            const lastIndex = state.pages[state.pages.length - 1]

            if (currDigit > 9 || currDigit <= 1) {
                state.currPage = currDigit
                state.firstPost = postIndex * 10 
                return 
            } 
            if (currDigit === lastIndex) {
                state.pages.shift()
                state.pages.push(lastIndex + 1)
            }  
            if (currDigit === firstIndex) {
                state.pages.pop()
                state.pages.unshift(firstIndex - 1)
            } 
            state.currPage = currDigit
            state.firstPost = postIndex * 10     
        }
    }
})

export const { increment, decrement, changePage } = pageSlice.actions

export default pageSlice.reducer