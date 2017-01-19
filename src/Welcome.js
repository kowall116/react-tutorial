import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    const { user } = this.props
    return (
      <h2>Welcome, {user}!</h2>
    )
  }
}
