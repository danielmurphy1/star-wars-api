import React from "react";


function Table (props){
    const tableRows = [];

    for(let i = 0; i < props.characters.length-1; i++){
        let character = props.characters[i];
        console.log(character)
        tableRows.push(<tr>
                            <td>{character.name}</td>

                        </tr>)
        console.log(tableRows);
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


