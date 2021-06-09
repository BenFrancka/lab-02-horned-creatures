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
    this.setState({ filterHorns: e.target.value })
  }

  
  render () {

    let filteredCreatures = creatures;
  
    
    if (this.state.filterKeyword) {
      filteredCreatures = creatures.filter(creature => creature.keyword === this.state.filterKeyword)
    }

    if (this.state.filterHorns) {
         filteredCreatures = creatures.filter(creature => creature.horns === +this.state.filterHorns)
    }
    
    //makes array of keywords for dropdown props
    const keywordsWithRepeats = creatures.map(creature => creature.keyword);
    const setOfKeywords = new Set(keywordsWithRepeats);
    const keywordOptions = Array.from(setOfKeywords);
  
    //makes array of horns for dropdown props
    const hornsWithRepeats = creatures.map(creature => creature.horns);
    const setOfHorns = new Set(hornsWithRepeats);
    const hornOptions = Array.from(setOfHorns)
    
    return (
      
      <main>
      <div className="App">

        <header className="App-header">
          <Header />
        </header>

            <div className= "drop-down">
              Type
              <Dropdown 
                  options={keywordOptions}
                  handleSelection={this.handleCreatureSelection}
              />
              Number of Horns
              <Dropdown 
                  options={hornOptions}
                  handleSelection={this.handleHornSelection}
              />
                  
            </div>

            <div className= "creature-section">
            
              <ImageList list= {filteredCreatures}  />
              
            </div>
      </div>
    </main> 
  );
}
}

