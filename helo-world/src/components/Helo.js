import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Luffy</h1>
    //     </div>
    // )
        return     React.createElement(
            'div',{id:"heloId"},
            React.createElement('h1',{className:"h1Class anotherName"},'helo eren')
            )
}

export default Hello;