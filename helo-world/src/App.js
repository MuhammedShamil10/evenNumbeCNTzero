import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Helo'
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Counter></Counter>
        {/* <Message></Message> */}
        {/* <Greet name="clark" heroName="super man">
          <button>Take Dress</button>  
         </Greet>
        <Greet name="diana" heroName="wonder women">
          <h1>smaple</h1>
           </Greet>
           <Welcome name="diana" heroName="wonder women"/>
           <Welcome name="luffy" heroName="drogen monkey"/>
          <Hello /> */}
          <Welcome name="Monkey D Luffy" heroName="King of Piretes"/>
      </div>
    );
  }
}

export default App;
