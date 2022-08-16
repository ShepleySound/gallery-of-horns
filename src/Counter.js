import React from 'react';
import CounterButton from './CounterButton';

class Counter extends React.Component {
  render() {
    return (
      <div className='Counter'>
        <CounterButton/>
        <p>0</p>
      </div>
    )
  }
}

export default Counter;