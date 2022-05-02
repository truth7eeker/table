import React from 'react'
import './Container.scss'
import Search from '../../search/Search.js'
import TableEls from '../tableEls/TableEls'
import TableFooter from '../footer/TableFooter'



function Container() {
  return (
    <div className='container'>
      <Search />
      <TableEls />
      <TableFooter />
    </div>
  )
}

export default Container