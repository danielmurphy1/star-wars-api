import React from "react";

function SearchForm(props){

    return(
        <form onSubmit={props.searchCharacter} className="mb-3">
            <label>Search Character: </label>
            <input 
                type="text" 
                name="nameSearch" 
                value={props.nameSearch} 
                onChange={props.handleChange}
                placeholder="Enter Character Name..."
                className="m-2"
                required></input>
            <button className="btn btn-outline-warning" type="submit">Search</button>
        </form>
    )
}

export default SearchForm;