import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sort } from '../../../store/reducers/postsSlice/postsSlice.js'

function Sort() {
 const dispatch = useDispatch()
 const sortedByID = useSelector(state => state.posts.sortedBy.id)
 const sortedByTitle = useSelector(state => state.posts.sortedBy.title)
 const sortedByDescription = useSelector(state => state.posts.sortedBy.body)

 const sortItems = (type) => {
     dispatch(sort(type))
 }

 return { sortItems, sortedByID, sortedByTitle, sortedByDescription }
 
}

export default Sort