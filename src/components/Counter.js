import React from 'react';
import CounterButton from './CounterButton';
import './Counter.css';

class Counter extends React.Component {

  render() {
    return (
      <div className='Counter' onClick={this.props.handleClick}>
        <CounterButton />
        <p className='Counter_count'>{this.props.count}</p>
      </div>
    )
  }
}

export default Counter;