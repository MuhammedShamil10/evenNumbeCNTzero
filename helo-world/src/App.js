import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Helo'
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './ParentComponent';
// import ChildComponent from './ChildComponent';
// import UserGreeting from './UserGreeting';
// import NameList from './NameList';
// import Person from './Person';
import StyleSheet from './StyleSheet';
import Inline from './Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        {/* <Counter></Counter> */}

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

          {/* <Welcome name="Monkey D Luffy" heroName="King of Piretes"/> */}

          {/* <FunctionClick></FunctionClick> */}
          {/* <ClassClick></ClassClick> */}
          {/* <EventBind></EventBind> */}
          {/* <ParentComponent/> */}
          {/* <ChildComponent></ChildComponent> */}
          {/* <UserGreeting></UserGreeting> */}
           {/* <NameList></NameList> */}
           {/* <Person></Person> */}
           <StyleSheet primary={true}/>
           <Inline/>
           <Form></Form>
        
      </div>

    );
  }
}

export default App;
