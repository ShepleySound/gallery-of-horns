import React from 'react';
import {ReactComponent as OutlinedIcon} from './assets/favorite_48px_outlined.svg';
import {ReactComponent as FilledIcon} from './assets/favorite_48px_filled.svg';

import './CounterButton.css';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false }
  }
  render() {
    return (
      <button 
        className='Button_counterButton'
        onMouseEnter={() => this.setState({hovered: true})}
        onMouseLeave={() => this.setState({hovered: false})}>
        {this.state.hovered ? <FilledIcon/> : <OutlinedIcon/>}
      </button>
    );
  }
}

export default CounterButton;