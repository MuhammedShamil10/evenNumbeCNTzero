import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "luffy",
    };
    console.log("lifeCycle constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifeCucle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log(('lifeCuycle'));
  }

  render() {
    console.log("lifeCycle render");
    return (
      <div>
        <div>LifeCycle A</div>
      </div>
    )
  }
}

export default LifeCycleA;
