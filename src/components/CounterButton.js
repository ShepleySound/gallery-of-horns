import React from 'react';
import {ReactComponent as FilledIcon} from '../assets/favorite_24px_filled.svg';

import './CounterButton.css';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'transparent'
    }
  }
  render() {
    return (
      <button 
        className='Button_counterButton'
        onMouseEnter={() => this.setState({fill: '#cccccc'})}
        onMouseLeave={() => this.setState({fill: 'transparent'})}>
        <FilledIcon fill={this.state.fill} stroke='#cccccc' /> 
      </button>
    );
  }
}

export default CounterButton;