import React from 'react';
import './Main.css'
import HornedBeast from '../HornedBeast';
import beastData from '../../utils/beast-data.json';

class Main extends React.Component {
  beastItems = beastData.map((beast) => {
    return <HornedBeast 
      key={beast._id} 
      title={beast.title} 
      beastImage={beast.image_url} 
      description={beast.description} />
  })
  render() {
    return (
      <main className='Main'>{this.beastItems}</main>
    )
  }
}

export default Main;