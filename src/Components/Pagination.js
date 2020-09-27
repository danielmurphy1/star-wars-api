import React from "react";

class Pagination extends React.Component{

    render(){
        let pages =[];
        for(let i = 1; i <= 9; i++){
            pages.push(i);
        }

        const navigate = pages.map((page) => {
            <button key={page} onClick={()=> this.props.loadCharacters(page)}>
                {page}
            </button>
        });

        return(
            <div>
                {navigate}
            </div>
        )
    
    }

}  

    

export default Pagination;