import React from 'react';
import {ReactComponent as FilledIcon} from '../assets/favorite_24px_filled.svg';

import './CounterButton.css';

class CounterButton extends React.Component {

  render() {
    return (
      <button 
        className='Button_counterButton'>
        <FilledIcon fill={this.props.fill} stroke='#cccccc' /> 
      </button>
    );
  }
}

export default CounterButton;