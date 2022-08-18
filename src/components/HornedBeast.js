import React from 'react';
import Counter from './Counter';
import './HornedBeast.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show: false
    }
  }

  handleClick = () => {
    this.setState(() => {
      return {count: this.state.count + 1}
    })
  }

  render() {
    return (
      <div key={this.props._id} className="BeastCard">
        <figure onClick={this.props.handleSelect} className="BeastCard_figure">
          <img className="BeastCard_image" src={this.props.beastImage} alt={this.props.description} width="220"></img>
          <figcaption className="BeastCard_title">{this.props.title}</figcaption>
        </figure>
          <div className='BeastCard_buttonRow'>
            <Counter handleClick={this.handleClick} count={this.state.count}/>
          </div>
      </div>
      
    )
  }
}

export default HornedBeast