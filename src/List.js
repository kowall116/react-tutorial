import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Eggs',
        'Bananas',
        'Milk'
      ]
    }
  }

  addItem(event) {
    event.preventDefault()
    const { item } = this.refs
    this.setState({
      list: [
        ...this.state.list,
        item.value
      ]
    })
    item.value = ''
  }

  removeItem(event) {
    event.preventDefault()
    const list = this.state.list.filter(item => {
      return item !== event.target.innerHTML
    })
    this.setState({
      list
    })
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <h3>Grocery List</h3>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index} onClick={this.removeItem.bind(this)}>{item}</li>
            )
          })}
        </ul>
        <form onSubmit={this.addItem.bind(this)}>
          <input type='text' name='item' ref='item'/>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}
