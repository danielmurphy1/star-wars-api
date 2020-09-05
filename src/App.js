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

  async componentDidMount(){
    const planetsArray = [];
    this.setState({loading: true});

    const data = await fetch("https://swapi.dev/api/people").then(response => response.json());
    // loop through each character (data.results)
    for (const character of data.results) {
      console.log(character);
      // get the planet data
      const planetURL = character.homeworld;
      console.log(planetURL)
      const planetData = await fetch(planetURL).then(planetResponse => planetResponse.json())
      
      // set the character homeworld = planet.name 
      console.log(planetData.name)
      planetsArray.push(planetData.name);     
    }
    console.log(planetsArray)
    //const data2 = await fetch("https://swapi.dev/api/people/?page=2").then(response => response.json());
    this.setState({
      loading: false, 
      characters: [...data.results], //...data2.results]
      planets: planetsArray
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