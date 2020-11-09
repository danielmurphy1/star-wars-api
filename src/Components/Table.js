import React from "react";


function Table (props){
    const tableRows = props.characters.map(character => {
        return (
        <tr key={character.name}>
            <td>{character.name}</td>
            <td>{character.birth_year}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
        </tr>)
    })

    return(
        <table className="table table-dark">
            <thead className="thead-light">
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Homeworld</th>
                    <th>Species</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
    
}

export default Table;


