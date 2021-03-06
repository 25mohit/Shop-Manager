import React, { useEffect, useState } from 'react'
import './Filterbar.css'

export const Filterbar = ({ categoryFilter, areaFilter, nameFilter, shopCategoryFilter,shopAreaFilter, shopStateFilter }) => {
    const [fields, setFields] = useState({
        name:'',
        area:'',
        category:''
    })
    const handleInput = ( field ) => (e) => {
            const {value} = e.target;

            setFields({
                ...fields,
                [field]:value,
            })

           switch( field ){
                case "name" :
                    nameFilter(value) 
                    break;
                case "category":
                    shopCategoryFilter( value )
                    break;
                case "area":
                    shopAreaFilter( value )
                    break;
                case "state":
                    shopStateFilter( value )
                    break;
           }
    }
  
  return (
    <div className='filterbar-div'>
        <div className="container-div-filter">
            <h2 className="search-text">Search</h2>
            <input type="text" placeholder='Search for shop...' value = {fields.name} onChange={ handleInput("name") }/>
            <select name="" id="" onChange={ handleInput("area")} value={fields.area}>
                <option value="">All Areas</option>
                {
                    areaFilter.map(aName => <option key={ aName } value={ aName }>{ aName }</option>)
                }
            </select>
            <select name="" id="" onChange={ handleInput("category")}>
                <option value="">All Categories</option>
                {
                    categoryFilter.map( cName => <option key={ cName }>{ cName }</option>)
                }
            </select>
            <select name="" id="" onChange={ handleInput("state")}>
                <option value="">All States</option>
                <option value="open">Open</option>
                <option value="close">Close</option>
            </select>
            {/* <input type="date" />
            <input type="date" /> */}
        </div>
    </div>
  )
}
