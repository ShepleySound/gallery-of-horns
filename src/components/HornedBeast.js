import React from 'react';
import Counter from './Counter';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState(() => {
      return {count: this.state.count + 1}
    })
  }
  
  render() {
    return (
      <figure key={this.props._id} title={this.props.title} className="BeastCard">
        <img className="BeastCard_image" src={this.props.beastImage} alt={this.props.description} width="220"></img>
        <figcaption className="BeastCard_description">{this.props.description}</figcaption>
        <div className='BeastCard_buttonRow'>
          <Counter handleClick={this.handleClick} count={this.state.count}/>
        </div>
      </figure>
    )
  }
}

export default HornedBeast