import React from 'react';
import Counter from './Counter';
import './HornedBeast.css';

class HornedBeast extends React.Component {
  render() {
    return (
      <div key={this.props._id} title={this.props.title} className="BeastCard">
        <img className="BeastCard_image" src={this.props.beastImage} alt={this.props.description} width="220"></img>
        <p className="BeastCard_description">{this.props.description}</p>
        <Counter/>
      </div>
    )
  }
}

export default HornedBeast