import React, { Component } from 'react'
import './App.css';
import creatures from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

export default class App extends Component {

  //initial state on load
  state = {
    filterKeyword: '',
    filterHorns: ''
  }

  //functions to set state in events
  handleCreatureSelection = (e) => {
    this.setState({ filterKeyword: e.target.value })
  }

  handleHornSelection = (e) => {
    this.setState({filterHorns: e.target.value})
  }

  //makes array of keywords for dropdown props
  const keywordsWithRepeats = creatures.map(creature => creature.keyword);
  const setOfKeywords = new Set(keywordsWithRepeats);
  const keywordOptions = Array.from(setOfKeywords);

  //makes array of horns for dropdown props
  const hornsWithRepeats = creatures.map(creature => creature.horns);
  const setOfHorns = new Set(hornsWithRepeats);
  const hornOptions = Array.from(setOfHorns)

  render () {
    let filteredCreatures = creatures;
    console.log(filteredCreatures);

    if (this.state.filterKeyword) {
      filteredCreatures = creatures.filter(creature => creature.keyword === this.state.filterKeyword)

    }
  
  return (
  
    <main>
      <div className="App">

        <header className="App-header">
          <Header />
        </header>

            <div className= "drop-down">
               <label>
                      <select>
                          <option value= "1">One Horned</option>
                          <option value="2">Two Horned</option>
                          <option value="3">Three Horned</option>
                          <option value="100">Too Many Horns</option>
                      </select>
                  </label>

                  <label>
                      <select onChange={this.handleCreatureSelection}>
                          <option value= "narwhal">narwhal</option>
                          <option value="rhino">rhino</option>
                          <option value="unicorn">unicorn</option>
                          <option value="unilego">unilego</option>
                          <option value="triceratops">triceratops</option>
                          <option value="markhor">markhor</option>
                          <option value="mouflon">mouflon</option>
                          <option value="addax">addax</option>
                          <option value="chameleon">chameleon</option>
                          <option value="lizard">lizard</option>
                          <option value="dragon">dragon</option>
                      </select>
                  </label>

                  
            </div>

            <div className= "creature-section">
            
              <ImageList list= {filteredCreatures}  />
              
            </div>
      </div>
    </main> 
  );
}
}

