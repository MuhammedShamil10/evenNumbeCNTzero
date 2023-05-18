import react from 'react'

// function Greet() {
//     return <h1>Helo Naruto</h1>
// }
const Greet = (props) => {
    console.log(props);
return (
    <div>
<h1>
    Hi {props.name},a.k.a {props.heroName}
    </h1>
    {props.children}
    </div>
);
}

export default Greet