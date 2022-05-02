import React from 'react'
import './Search.scss'
import lens from '../../assets/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { input, search } from '../../store/reducers/postsSlice/postsSlice.js'

function Search() {
  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.posts.input)
  
  const handleInput = e => {
    dispatch(input(e.target.value))
  }

  const handleSearch = () => {
    dispatch(search())
  }

  return (
    <div className='search'>
        <label className='search-label'>
            <input placeholder='Поиск' className='search-input' onChange={handleInput} value={inputValue} />
            <div className='search-icon' onClick={handleSearch}>
            <img src={lens} />
            </div>
        </label>
    </div>
  )
}

export default Search