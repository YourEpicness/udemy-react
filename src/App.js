import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // context of this in handleChange is this keyword (binding handleChange to this.)
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()
    .then(users => this.setState({monsters: users})));
  }
  // Function to handleChange in search bar
  /*
  handleChange(e) {
    this.setState({searchField: e.target.value})
  }
*/
// will automatically bind this keyword for handleChange
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    // destructuring our array to search properly
    // easier way of typing
    // cont monsters = this.state.monsters
    // const searchField = this.state.searchField
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase() // makes sure search is not case senstiive
      .includes(searchField.toLowerCase()) // includes search text and ensures not case sensitive

    );

    return ( // returning so it works
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
        );
      }
  }
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
