import React from 'react';
import './Main.css'
import HornedBeast from '../HornedBeast';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <main className='Main'>
        {
          this.props.beastData.filter(beast => beast.isSearchMatch && beast.isHornMatch)
            .map((beast) => 
          <HornedBeast 
            key={beast._id}
            title={beast.title}
            beastImage={beast.image_url} 
            description={beast.description}
            count={beast.count}
            handleClick={() => this.props.handleClick(beast)}
            handleSelect={() => this.props.handleSelect(beast)}/>
          )
        }
      </main>
    )
  }
}

export default Main;