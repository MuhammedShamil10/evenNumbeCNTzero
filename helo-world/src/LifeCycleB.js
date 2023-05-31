import React, { Component } from 'react'


    class lifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'luffy'
      }
      console.log('lifeCycle constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifeCucle getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('lifeCycleB componentDidMount');
    }

  render() {
    console.log(('lifeCycle render'));
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default lifeCycleB