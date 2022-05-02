import React from 'react'
import { Link } from 'react-router-dom'
import './TableFooter.scss'
import Digits from './Digits'

function TableFooter() {
  const { digitEls, next, prev, currPage, back, forward, posts } = Digits()

  return (
    <div className='table-footer' style={{display: posts.length ? 'flex' : 'none'}}>
      <button className={currPage === 1 ? 'button-disabled' : 'button-active'} onClick={prev}>
        <Link to={`/table/${back()}`}>Назад</Link>
      </button>

      <div className='table-footer__digits'>
        {digitEls}
      </div>

      <button className={currPage === 10 ? 'button-disabled' : 'button-active'} onClick={next}>
        <Link to={`/table/${forward()}`}>Вперед</Link>
      </button>
    </div>
  )
}

export default TableFooter