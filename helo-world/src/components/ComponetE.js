import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponetE extends Component {
    static contextType = UserContext
  render() {
    return (
        <div>
            Componet E context {this.context}
            <ComponentF />
        </div>
    )
  }
}
ComponetE.contextType = UserContext

export default ComponetE