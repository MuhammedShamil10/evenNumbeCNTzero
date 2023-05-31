import React, { Component, PureComponent } from 'react'
// import RegComp from './RegComp'
// import Purecomponent from './Purecomponent'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'luffy'
      }
    }

    componentDidMount() {
      setInterval(() => {
        this.setState({
          name: 'luffy'
        })
      }, 2000)
    }


  render() {
    console.log("*******************Parent Comp render**********************");
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name} />
       {/* <RegComp name={this.state.name}></RegComp>
       <PureComponent name={this.state.name}></PureComponent> */}
      </div>
    )
  }
}

export default ParentComp