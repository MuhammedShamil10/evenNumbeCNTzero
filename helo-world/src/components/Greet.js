import react from "react";

// function Greet() {
//     return <h1>Helo Naruto</h1>
// }
// const Greet = ({name,heroName}) => {
const Greet = (props) => {
  const {name, heroName} = props
  console.log();
  return (
    <div>
      <h1>
        Hi {name},a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
