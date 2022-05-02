import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changePage, decrement, increment } from '../../../store/reducers/pageSlice/pageSlice.js'
import { resetSearch } from '../../../store/reducers/postsSlice/postsSlice.js'


function Digits() {
    const dispatch = useDispatch()
    const digits = useSelector(state => state.page.pages)
    const currPage = useSelector(state => state.page.currPage)
  
    // Bottom digits JSX
    const digitEls = digits.map((digit) => 
      <div className={digit === currPage ? 'digit-active' : null} 
      key={digit} 
      onClick={() => handleDigit(digit)}>
          <Link to={`/table/${digit}`}>{digit}</Link>   
      </div>)

    // Handle digits click
    const handleDigit = (digit) => {
        dispatch(resetSearch())
        dispatch(changePage({digit, index: digit-1}))
    }

    // Handle prev and next buttons
    const next = () => {
        dispatch(increment())
        dispatch(resetSearch())
    }

    const prev = () => {
        dispatch(decrement())
        dispatch(resetSearch())
    }

    // Change page number in URL on "next" and "prev" clicks
    const forward = () => {
        let page = currPage
        currPage < 10 ? page = currPage + 1 : page = currPage
        return page
    }

    const back = () => {
        let page = currPage
        currPage > 1 ? page = currPage - 1 : page = currPage
        return page
    }

    return {currPage, next, prev, digitEls, forward, back}
}

export default Digits