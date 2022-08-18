import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header.js';
import Main from './components/layout/Main.js';
import Footer from './components/layout/Footer.js';
import React from 'react';
import SelectedBeast from './components/SelectedBeast.js';
import beastData from './utils/beast-data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBeast: null,
      searchResults: beastData,
    }
  }

  handleClick = (clicked) => {
    console.log(clicked)
    console.log("Favorited")
    // this.setState(prevState => {
    //   searchResults: prevState.searchResults.map(beast => {
    //     beast._id === key ? { ...beast, count: count + 1}: beast
    //   }) {
    //   }
    
  }

  handleSelect = (selected) => {
    console.log(selected)
    this.handleShow()
    this.setState({
      selectedBeast: selected
    })
  }

  handleShow = () => {
    this.setState(() => {
      return {show: true}
    })
  }

  handleClose = () => {
    this.setState(() => {
      return {show: false}
    })
  }

  handleChange = (event) => {
    const filteredBeasts = beastData
      .filter(beast => beast.keyword.includes(event.target.value))
    this.setState(() => {
      return {searchResults: filteredBeasts}
    })
  }

  render() {
    return (
      <>
        <Header title="Horned Beasts" handleChange={this.handleChange}/>
        <Main beastData={this.state.searchResults} handleClick={this.handleClick} handleSelect={this.handleSelect}/>
        <Footer authorName="Robert Shepley" />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beast={this.state.selectedBeast}></SelectedBeast>
      </>
    )
  } 
}

export default App;
