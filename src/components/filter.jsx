import React, { useState } from "react";
import '../index.css'
function Filter ({sendFunc}) {
    const [inputValue, setInputValue] = useState("")
    const handleFilterType = (event) => {
        setInputValue(event.target.value)
    }
    const handleClickedType = () => {
        sendFunc(inputValue);
    }
    return(
        <div className="filter-div">
            <h1 className="filter-text">Filter By : </h1>
            <select name="category" className="filter-select">
                <option value="types">Types</option>
            </select>
            <div className="filterSearch-div">
                <input type="text" className="filter-input" placeholder="Search..." onChange={handleFilterType} value={inputValue}/>
                <button className="search-btn" onClick={handleClickedType}>Search</button>
            </div>
        </div>
    )
}
export default Filter;