import React from "react";


function Table (props){
    //console.log(typeof props.characters)
    //console.log(props.characters)
    const tableRows = [];
    // console.log(props.planets.results)
    // console.log(props.characters.results)
    // console.log(props.characters)
    // console.log(props.planets)
    for(let i = 0; i < props.characters.length; i++){
        let character = props.characters[i];
        
        tableRows.push(<tr key={character.name}>
                            <td>{character.name}</td>
                            <td>{character.birth_year}</td>
                            <td>{character.height}</td>
                            <td>{character.mass}</td>
                            <td>{character.homeworld === "http://swapi.dev/api/planets/1/" ? "Tatooine" : character.homeworld}</td>
                            <td>{character.species.length < 1 ? "Human" : character.species}</td>
                        </tr>)
        //console.log(tableRows);
    }

    return(
        <table>
            <thead>
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
// class Table extends React.Component {
//     constructor(props){

//     const tableRows = [];

//     for(let i = 0; i< this.props.character.length-1; i++){
//         let character = this.props.characters[i];
//         tableRows.push(<tr>
//                             <td>{character.name}</td>

//                         </tr>)
//     }

//     }

//     render(){
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Birth Date</th>
//                         <th>Height</th>
//                         <th>Mass</th>
//                         <th>Homeworld</th>
//                         <th>Species</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableRows}
//                 </tbody>
//             </table>
//         )
//     }
// }



export default Table;


