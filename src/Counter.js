import React from 'react';
import CounterButton from './CounterButton';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState((state) => {
      return {count: this.state.count + 1}
    })
  }
  render() {
    return (
      <div className='Counter' onClick={this.handleClick}>
        <CounterButton />
        <p className='Counter_count'>{this.state.count}</p>
      </div>
    )
  }
}

export default Counter;