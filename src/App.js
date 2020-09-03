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
      character:{}, 
      planet: {}
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/10/")
      .then(response => response.json())
      .then(data => {
        fetch("http://swapi.dev/api/planets/20/	")
        .then(response2 => response2.json())
        .then(data2 => {
        this.setState({
          loading: false,
          character: data,
          planet: data2
        })
      })
      console.log(data)
    })
    .catch(function(){
      alert("error")
    })
  }
    render() {
      return (
        <div className="App">
          {(this.state.loading) ? "loading" : <Table character={this.state.character} planet={this.state.planet}/>}
        </div>
      );
    }

}
export default App;
