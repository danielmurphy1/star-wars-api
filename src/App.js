import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Table from "./Components/Table";
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
      nameSearch: "", 
      count: ""
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
  
      // get the planet data
      const planetURL = character.homeworld;
      const planetData = await fetch(planetURL).then(planetResponse => planetResponse.json());
      
      // set the character homeworld = planet.name 
      planetsArray.push(planetData.name);  
      
      const speciesURL = (character.species.length < 1) ? "https://swapi.dev/api/species/1/" : character.species[0]; //species array is broken for Human - need to hardcode the URL for Human species
     
      const speciesData = await fetch(speciesURL).then(speciesResponse => speciesResponse.json())

      speciesArray.push(speciesData.name)
    }
   
    this.setState({
      loading: false, 
      characters: [...data.results],
      planets: planetsArray,
      species: speciesArray, 
      count: data.count
    })
  }

  async loadCharacters(pageNumber){
   const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}&search=${this.state.nameSearch}`)
    .then(res => res.json());
    this.setState({
      characters: response.results, 
      count: response.count
    });
    
}

async searchCharacter(event){
  event.preventDefault();
  console.log(this.state.nameSearch)
  const response = await fetch(`https://swapi.dev/api/people/?search=${this.state.nameSearch}`)
    .then(res => res.json());
    this.setState({
      characters: response.results,
      count: response.count
    });
}

handleChange(event){
  const {name, value} = event.target;
  this.setState({
    [name] : value
  })
};

    render() {
      return (
        <div className="App">
          <Header />
          <SearchForm 
            nameSearch={this.state.nameSearch} 
            searchCharacter={this.searchCharacter} 
            handleChange={this.handleChange} />
          {(this.state.loading) ? "loading" : 
            <Table 
              key={this.state.characters} 
              characters={this.state.characters} 
              planets={this.state.planets} 
              species={this.state.species}/>}
            <Pagination 
            loadCharacters = {this.loadCharacters} 
            characters={this.state.characters} 
            count={this.state.count} />
        </div>
      );
    }

}
export default App;