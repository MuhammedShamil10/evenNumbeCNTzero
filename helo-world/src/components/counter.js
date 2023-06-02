import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    )
  }
}

export default counter



// const people = ["luffy","rengaku","madara","saitama","zoro","tanjiro","eren","minato"]
// const newPeople = people.with(2, "naruto")

// const sortedPeople = newPeople.toSorted()
// console.log("OG",people);
// console.log("sorted",sortedPeople);

// const newPeopleCopy = people.splice(0, 2, "Muzan")

// console.log("newCopyM", newPeopleCopy);
// console.log(people,"old");
