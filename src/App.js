import React from 'react';
import './App.css';
import Table from "./Components/Table"
import Pagination from "./Components/Pagination";
import SearchForm from "./Components/SearchForm";

// https://swapi.co/ (old)
// https://swapi.dev/

//"https://swapi.dev/api/people/4/ need to add final "/"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      characters:[], 
      planets: [], 
      species: [], 
      nameSearch: ""
    }

    this.loadCharacters = this.loadCharacters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchCharacter = this.searchCharacter.bind(this);
  }

 

  async componentDidMount(){
    const planetsArray = [];
    const speciesArray = [];
    this.setState({loading: true});

    const data = await fetch("https://swapi.dev/api/people/").then(response => response.json());
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
      
      const speciesURL = (character.species.length < 1) ? "https://swapi.dev/api/species/1/" : character.species[0]; //species array is broken for Human - need to hardcode the URL for Human species
      console.log(speciesURL);
      const speciesData = await fetch(speciesURL).then(speciesResponse => speciesResponse.json())
      console.log(speciesData.name);
      speciesArray.push(speciesData.name)
    }
    console.log(planetsArray)
    console.log(speciesArray)
    //const data2 = await fetch("https://swapi.dev/api/people/?page=2").then(response => response.json());
    this.setState({
      loading: false, 
      characters: [...data.results], //...data2.results]
      planets: planetsArray,
      species: speciesArray
    })
  }

  async loadCharacters(pageNumber){
   const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    .then(res => res.json());
    this.setState({
      characters: response.results
    });
}

async searchCharacter(event){
  event.preventDefault();
  console.log(this.state.nameSearch)
  const response = await fetch(`https://swapi.dev/api/people/?search=${this.state.nameSearch}`)
    .then(res => res.json());
    console.log(response.results)
    this.setState({
      characters: response.results
    });
    console.log(this.state.characters)
  
}

handleChange(event){
  const {name, value} = event.target;
  this.setState({
    [name] : value
  })
  console.log(this.state.nameSearch)
};

    render() {
      return (
        <div className="App">
          <SearchForm nameSearch={this.state.nameSearch} searchCharacter={this.searchCharacter} handleChange={this.handleChange} />
          {(this.state.loading) ? "loading" : 
            <Table 
              key={this.state.characters} 
              characters={this.state.characters} 
              planets={this.state.planets} 
              species={this.state.species}/>}
            <Pagination loadCharacters = {this.loadCharacters} />
        </div>
      );
    }

}
export default App;