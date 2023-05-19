import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Helo'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Greet name="clark" heroName="super man">
          <button>Take Dress</button>  
         </Greet>
        <Greet name="diana" heroName="wonder women"> </Greet>
        <Welcome name="clark" heroName="King of Piretes"/>
        <Welcome name="diana" heroName="wonder women"/>
        <Hello />
      </div>
    );
  }
}

class anotherApp extends Component {
  render() {
    return(
      <div className='"anotherApp'>

      </div>
    )
  }
}

export default App;

export default anotherApp;
