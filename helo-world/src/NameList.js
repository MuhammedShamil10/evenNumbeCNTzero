import React from "react";
import Person from "./Person";

function NameList() {
    // const persons = [
    //     {
    //         id: 1,
    //         name: "luffy",
    //         age:24,
    //         skill:"king of piretes"
    //     },
    //     {
    //         id: 2,
    //         name:"zoro",
    //         age:27,
    //         skill:"best swordsman in the world"
    //     },
    //     {
    //         id: 3,
    //         name:'sanji',
    //         age:27,
    //         skill:"cook"
    //     }
    // ]
    let names = ['luffy','naruto','eren'];
    let nameIndex = names.map((indexName, index) => <h2 key={index}>{index} {indexName}</h2>)
    return <div>{nameIndex}</div>
    // // let names = ['luffy','naruto','eren'];
    // let personList = persons.map(person =>(<Person key={person.name} person={person}/>))
    // return (
    //     <div>{personList}</div>
}


export default NameList;



// when to use index as a key
// 1. the items in your list do not have a uniqye ud.
// 2. the list is a static list and will not change
// 3. the list will never be reordered or filtered