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
    }
  }

  handleClick = (beast) => {
    this.setState(prevState => (
      {
        // Keep a "main" list of beasts to hold all state.
        beastList: prevState.beastList.map(
        el => el._id === beast._id ? { ...el, count: el.count + 1 } : el),

    }))
  }

  handleSelect = (beast) => {
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


  handleFilterChange = (event) => {
    this.setState(state => (
      {
        beastList: state.beastList
        .map(beast => {
          // Make all true if the selector is set to "All" (value = 0)
          if (!parseInt(event.target.value)) {
            return {...beast, isHornMatch: beast.isHornMatch = true}
          }
          // Set flag in the actual beast object depending on selector.
          return beast.horns === parseInt(event.target.value) ?
            {...beast, isHornMatch: beast.isHornMatch = true} :
            {...beast, isHornMatch: beast.isHornMatch = false}
        })
    }))
  }
  

  handleSearchChange = (event) => {
    this.setState(state => (
    {
      beastList: state.beastList
      .map(beast => {
          // Set flag in the actual beast object depending on search.
          return beast.keyword.includes(event.target.value) ? 
            {...beast, isSearchMatch: beast.isSearchMatch = true} : 
            {...beast, isSearchMatch: beast.isSearchMatch = false}
        }
        
      )
    }))
  }

  render() {
    return (
      <>
        <Header title="Gallery of Horns" handleSearchChange={this.handleSearchChange} handleFilterChange={this.handleFilterChange}/>
        <Main beastData={this.state.beastList} handleClick={this.handleClick} handleSelect={this.handleSelect}/>
        <Footer authorName="Robert Shepley" />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose} beast={this.state.selectedBeast}></SelectedBeast>
      </>
    )
  } 
}

export default App;
