import './App.css';
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
      selected: null
    }
  }
  render() {
    return (
      <>
        <Header title="Horned Beasts" />
        <Main beastData={beastData} />
        <Footer authorName="Robert Shepley" />
        <SelectedBeast></SelectedBeast>
      </>
    )
  } 
}

export default App;
