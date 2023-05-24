import React from "react";
import Person from "./Person";

function NameList() {
    const persons = [
        {
            id: 1,
            name: "luffy",
            age:24,
            skill:"king of piretes"
        },
        {
            id: 2,
            name:"zoro",
            age:27,
            skill:"best swordsman"
        },
        {
            id: 3,
            name:'sanji',
            age:27,
            skill:"cook"
        }
    ]
//   const names = ["luffy", "naruto", "tanjiro"];
     const personList = persons.map(person => <Person person={person}/>)
     return <div>{personList}</div>
}
export default NameList;
