import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import Table from "./Components/Table";
import Pagination from "./Components/Pagination";
import SearchForm from "./Components/SearchForm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      characters:[],  
      nameSearch: "", 
      count: ""
    }

    this.loadCharacters = this.loadCharacters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchCharacter = this.searchCharacter.bind(this);
  }

  async getCharacter(){
    const data = await fetch("https://swapi.dev/api/people/").then(response => response.json());
      
      await this.processCharacters(data.results)

      this.setState({
        loading: false, 
        characters: [...data.results],
        count: data.count
      })
    }

  async processCharacters(characters) {
    // loop through each character
    for (const character of characters) {

      // get the planet data from the URL endpoint
      const planetURL = character.homeworld;
      const planetData = await fetch(planetURL).then(planetResponse => planetResponse.json());
      character.homeworld = planetData.name //changes character.homeworld from a URL in the returned data to the name of the planet
      
      //get the species data from the URL endpoint
      const speciesURL = (character.species.length < 1) ? "https://swapi.dev/api/species/1/" : character.species[0]; //species array is broken for Human - need to hardcode the URL for Human species
      const speciesData = await fetch(speciesURL).then(speciesResponse => speciesResponse.json())
      character.species = speciesData.name; //changes character.species from a URL in the returned data to the name of the planet
    }
    return characters;
  }

  async loadCharacters(pageNumber){
    const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}&search=${this.state.nameSearch}`)
    .then(res => res.json());
    
    await this.processCharacters(response.results)

    this.setState({
      characters: response.results, 
      count: response.count
    });
  }

  componentDidMount(){
      this.setState({loading: true});
      this.getCharacter();
  }

  async searchCharacter(event){
    event.preventDefault();
    console.log(this.state.nameSearch)
    const response = await fetch(`https://swapi.dev/api/people/?search=${this.state.nameSearch}`)
      .then(res => res.json());
      
      await this.processCharacters(response.results)

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
      <div className="App container">
        <Header />
        <SearchForm 
          nameSearch={this.state.nameSearch} 
          searchCharacter={this.searchCharacter} 
          handleChange={this.handleChange} />
        {(this.state.loading) ? "loading" : 
          <Table 
            key={this.state.characters} 
            characters={this.state.characters}/>}
          <Pagination 
          loadCharacters = {this.loadCharacters} 
          characters={this.state.characters} 
          count={this.state.count} />
      </div>
    );
  }
}

export default App;