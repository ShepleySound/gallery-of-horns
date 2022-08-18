import React from 'react';
import Counter from './Counter';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div key={this.props._id} className="BeastCard">
        <figure onClick={this.props.handleSelect} className="BeastCard_figure">
          <img className="BeastCard_image" src={this.props.beastImage} alt={this.props.description} width="220"></img>
          <figcaption className="BeastCard_title">{this.props.title}</figcaption>
        </figure>
          <div onClick={this.props.handleClick} className='BeastCard_buttonRow'>
            <Counter count={this.props.count}/>
          </div>
      </div>
    )
  }
}

export default HornedBeast