import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './TableEls.scss'
import TableHeader from '../header/TableHeader.js'
import { getPosts } from '../../../api/getPosts.js'
import Table from './Table'

function TableEls() {
  const dispatch = useDispatch()
  const { firstPost, currPage, currPosts, foundPosts, posts, searchFound, searchNotFound, notFound } = Table()

  useEffect(() => {
    dispatch(getPosts(firstPost))
  }, [currPage])

  return (   
        <div className='table'>
          <TableHeader />
            {searchFound ? foundPosts : searchNotFound ? notFound : posts.length ? currPosts : <p>Loading...</p>}
        </div> 
  )
}

export default TableEls