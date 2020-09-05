import React from 'react';
import './App.css';
import Table from "./Table"

// https://swapi.co/ (old)
// https://swapi.dev/

//"https://swapi.dev/api/people/4/ need to add final "/"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      characters:[], 
      planets: []
    }

    
  }

  componentDidMount(){
    const planetsArray = [];
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => {
        fetch("http://swapi.dev/api/planets/?page=1")
          .then(response2 => response2.json())
          .then(planets1 => {
            planetsArray.push(planets1.results);
            console.log(planetsArray)
            fetch("http://swapi.dev/api/planets/?page=2")
            .then(response3 => response3.json())
            .then(planets2 => {
              planetsArray.push(planets2.results);

              console.log(planetsArray);
              console.log(planetsArray[0][0].name);
          
            this.setState({
              loading: false,
              characters: data.results,
              planets: planetsArray
            })
            console.log(this.state.planets);
        })
      
          //console.log(data)
      })
    })

    .catch(function(){
      alert("error")
    })

    
  }
    render() {
      return (
        <div className="App">
          {(this.state.loading) ? "loading" : <Table key={this.state.characters} characters={this.state.characters} planets={this.state.planets}/>}
        </div>
      );
    }

}
export default App;