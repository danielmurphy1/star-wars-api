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
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => {
        fetch("http://swapi.dev/api/planets/")
        .then(response2 => response2.json())
        .then(data2 => {
          this.setState({
            loading: false,
            characters: data.results,
            planets: data2.results
          })
      
          console.log(data)
          console.log(data2)
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
