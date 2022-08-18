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
      beastList: beastData,
      displayedBeasts: beastData
    }
  }

  handleClick = (beast) => {
    this.setState(prevState => (
      {
        beastList: prevState.beastList.map(
        el => el._id === beast._id ? { ...el, count: el.count + 1 } : el),

        displayedBeasts: prevState.displayedBeasts.map(
          el => el._id === beast._id ? { ...el, count: el.count + 1 }: el
      )
    }))
  }

  handleSelect = (beast) => {
    console.log(beast)
    this.handleShow()
    this.setState({
      selectedBeast: beast
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

  // handleFilterChange = (event) => {
  //   this.setState(state => {
  //     return {displayedBeasts:state.displayedBeasts
  //       .filter(beast => beast.horns)}
  //   })
  // }
  handleSearchChange = (event) => {
    this.setState(state => {
      return {displayedBeasts: state.beastList
        .filter(beast => beast.keyword.includes(event.target.value))}
    })
  }

  render() {
    return (
      <>
        <Header title="Horned Beasts" handleSearchChange={this.handleSearchChange}/>
        <Main beastData={this.state.displayedBeasts} handleClick={this.handleClick} handleSelect={this.handleSelect}/>
        <Footer authorName="Robert Shepley" />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beast={this.state.selectedBeast}></SelectedBeast>
      </>
    )
  } 
}

export default App;
