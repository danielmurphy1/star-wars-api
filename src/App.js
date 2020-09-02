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
      character:{}
    }
  }

  componentDidMount(){
    this.setState({loading: true})
    fetch("https://swapi.dev/api/people/1/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
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
          {(this.state.loading) ? "loading" : <Table character={this.state.character}/>}
        </div>
      );
    }

}
export default App;
