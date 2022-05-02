import React from 'react'
import { useSelector } from 'react-redux'
import TableRow from '../row/TableRow.js'

function Table() {
    const posts = useSelector(state => state.posts.list)
    const firstPost = useSelector(state => state.page.firstPost)
    const currPage = useSelector(state => state.page.currPage)
    const startSearch = useSelector(state => state.posts.startSearch)
    const found = useSelector(state => state.posts.found)

    const currPosts = posts.map(post => (<TableRow key={post.id} post={post}/>))
    const foundPosts = found.length && found.map(post => (<TableRow key={post.id} post={post}/>))

    const searchFound = startSearch && found.length
    const searchNotFound = startSearch && !found.length
    const notFound = searchNotFound ? <div> Not Found :( </div> : null
    

    return { currPosts, currPage, firstPost, foundPosts, posts, startSearch, notFound, searchFound, searchNotFound }
}

export default Table