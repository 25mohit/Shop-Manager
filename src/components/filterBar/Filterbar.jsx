import React from 'react'
import './Filterbar.css'

export const Filterbar = ({ categoryFilter, areaFilter, nameFilter }) => {
    const handeChangeName = (e) => {
            const value = e.target.value;
            nameFilter(value)
    }
    
  return (
    <div className='filterbar-div'>
        <div className="container-div-filter">
            <h2 className="search-text">Search</h2>
            <input type="text" placeholder='Search for shop...' onChange={ handeChangeName }/>
            <select name="" id="">
                <option value="">Area</option>
                {
                    areaFilter.map(aName => <option key={ aName }>{ aName }</option>)
                }
            </select>
            <select name="" id="">
                <option value="">Category</option>
                {
                    categoryFilter.map( cName => <option key={ cName }>{ cName }</option>)
                }
            </select>
            <input type="date" />
            <input type="date" />
        </div>
    </div>
  )
}
