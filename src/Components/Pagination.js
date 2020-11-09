import React from "react";

class Pagination extends React.Component{

    render(){
        let pages =[];
        let numButtons;

        (this.props.count % 10 === 0) ? 
            numButtons = (this.props.count /10) : 
            numButtons = ((this.props.count) / 10 + 1);

        for(let i = 1; i <= numButtons; i++){
            pages.push(i);
        }

        const navigate = pages.map((page) => (
            <button className=" btn btn-outline-warning m-1" key={page} onClick={()=> this.props.loadCharacters(page)}>
                {page}
            </button>
        ));

        return(
            <div>
                {navigate}
            </div>
        )
    
    }
}

export default Pagination;