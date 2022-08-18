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
      selectedBeast: null
    }
  }

  handleSelect = (selected) => {
    console.log("HELLO")
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

  render() {
    return (
      <>
        <Header title="Horned Beasts" />
        <Main beastData={beastData} handleSelect={this.handleSelect}/>
        <Footer authorName="Robert Shepley" />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beast={this.state.selectedBeast}></SelectedBeast>
      </>
    )
  } 
}

export default App;
