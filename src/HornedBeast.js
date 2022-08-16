import React from 'react';
import Counter from './Counter';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  render() {
    return (
      <figure key={this.props._id} title={this.props.title} className="BeastCard">
        <img className="BeastCard_image" src={this.props.beastImage} alt={this.props.description} width="220"></img>
        <figcaption className="BeastCard_description">{this.props.description}</figcaption>
        <div className='BeastCard_buttonRow'>
          <Counter/>
        </div>
      </figure>
    )
  }
}

export default HornedBeast