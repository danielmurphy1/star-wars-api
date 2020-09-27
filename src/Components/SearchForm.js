import React from "react";

function SearchForm(props){

    return(
        <form onSubmit={props.searchCharacter}>
            <label>Search Character: </label>
            <input type="text" name="nameSearch" value={props.nameSearch} onChange={props.handleChange}></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm;