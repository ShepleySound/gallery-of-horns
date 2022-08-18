import React from 'react';
import CounterButton from './CounterButton';
import './Counter.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 'transparent'
    }
  }

  render() {
    return (
      <div 
      className='Counter' 
      onClick={this.props.handleClick}
      onMouseEnter={() => this.setState({fill: '#cccccc'})}
      onMouseLeave={() => this.setState({fill: 'transparent'})}>
        <CounterButton fill={this.state.fill}/>
        <p className='Counter_count'>{this.props.count}</p>
      </div>
    )
  }
}

export default Counter;