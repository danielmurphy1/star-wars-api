import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

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
    fetch("https://swapi.dev/api/people/10/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
      })
    })
    .catch(function(){
      alert("error")
    })
  }

    render() {
      return (
        <div className="App">
          <p>{(this.state.loading) ? "loading" : (this.state.character.name)}</p>
        </div>
      );
    }

}
export default App;
