import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import Checkbox from './Checkbox';

class App extends Component {

  state = {
    hogs: hogs,
    hogToggle: false,
    sortValue: "none"
  }

  
  sortHogState = (value) => {
    this.setState({sortValue: value})
  }
  
  sortHogArray = (hogs) => {
    const hogCopy = [...hogs]
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (this.state.sortValue === "name") {
      return hogCopy.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
    }

    if (this.state.sortValue === "weight") {
      return hogCopy.sort((a, b) => b[weight] - a[weight])
    }

    if (this.state.sortValue === "none") {
      return hogs
    }
  }

  toggleHogs = () => {
    this.setState({ hogToggle: !this.state.hogToggle})
  }

  filterHogs = () => {
    return this.state.hogToggle 
      ? hogs.filter(hog => hog.greased)
      : hogs
  }

  render() {
    const filteredHogs = this.sortHogArray(this.filterHogs())

    return (
      <div className="App">
          <Nav />
          <Checkbox toggleHogs={this.toggleHogs} sortHogs={this.sortHogState}/>
          <HogList hogs={filteredHogs}/>
      </div>
    )
  }
}

export default App;
