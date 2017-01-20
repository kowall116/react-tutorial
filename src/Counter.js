import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increment(event) {
    event.preventDefault()
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))
  }

  decrement(event) {
    event.preventDefault()
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }))
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <span>{counter}</span>
        <button onClick={this.decrement.bind(this)}>-</button>
        <button onClick={this.increment.bind(this)}>+</button>
      </div>
    )
  }
}
