import React, { Component } from 'react'
import UserData from './UserData'
import UserMessage from './UserMessage'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: false
      }
    }
  render() {
    return (
      <div>
        
        <UserMessage isLoggedIn={this.state.isLoggedIn} />
        <UserData isLoaded={this.state.isLoaded} />
      </div>
    )
  }
}

export default ConditionalRenderingClass