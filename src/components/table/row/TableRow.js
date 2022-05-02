import React from 'react'
import './TableRow.scss'

function TableRow({ post }) {
  
  return (
    <div className='row'>
      <div className='cell cell__id'>{post.id}</div>
      <div className='cell cell__title'>{post.title}</div>
      <div className='cell cell__description'>{post.body}</div>
    </div>
  )
}

export default TableRow