import React from "react";



class Table extends React.Component {
    contructor(props){
        
        this.setState(props.character)

        
    }

    render(){
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
                <tr>
                    <td>{this.props.character.name}</td>
                    <td>{this.props.character.birth_year}</td>
                    <td>{this.props.character.height}</td>
                    <td>{this.props.character.mass}</td>
                    <td>{this.props.character.homeworld}</td>
                    <td>{this.props.character.species}</td>
                </tr>
                </tbody>
            </table>
        )
    }
}



export default Table;
