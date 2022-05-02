import React from 'react'
import './TableHeader.scss'
import sort from '../../../assets/filter-icon.svg'
import Sort from './Sort'

function TableHeader() {
  const { sortItems, sortedByID, sortedByTitle, sortedByDescription } = Sort()

  return (
    <div className='table-header row'>

        <div className='table-header__cell header-cell__id' onClick={() => sortItems('id')}>
            <div>ID</div>
            <img src={sort} className={!sortedByID ? 'ascend' : null}/>
        </div>
     
        <div className='table-header__cell' onClick={() => sortItems('title')}>
            <div>Заголовок</div>
            <img src={sort} className={sortedByTitle ? 'ascend' : null}/>
        </div>
    

        <div className='table-header__cell' onClick={() => sortItems('body')}>
            <div>Описание</div>
            <img src={sort} className={sortedByDescription ? 'ascend' : null} />
        </div>
    </div>
  )
}

export default TableHeader