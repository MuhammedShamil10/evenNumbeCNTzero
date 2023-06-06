import React, { Component} from 'react'
// import logo from './logo.svg';
import './App.css';
import ComponetC from './components/ComponetC';
// import DataFetching from './components/DataFetching';
// import ClassMouse from './ClassMouse';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import HookMouse from './HookMouse';
// import MouseContainer from './MouseContainer';
// import HookCounterfour from './HookCounterfour';
// import HookCounterOne from './HookCounterOne';
// import ClassCounterOne from './ClassCounterOne';
// import HookCounterThree from './HookCounterThree';
// import HookCounterTwo from './HookCounterTwo';
// import HookCounter from './HookCounter';
// import ClassCounter from './ClassCounter';
// import PostForm from './PostForm';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import User from './components/User';
// import ClickCounter from './ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import RefsDemo from './RefsDemo';
// import FRParentInput from './FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './ErrorBoundary';
// import FocusInput from './FocusInput';
// import Purecomponent from './Purecomponent';
// import RegComp from './RegComp';
// import ParentComp from './ParentComp';
// import MemoComp from './MemoComp';
// import FragmentDemo from './FragmentDemo';
// import Table from './Table';
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
// import StyleSheet from './StyleSheet';
// import Inline from './Inline';
// import './appStyle.css'
// import styles from './appStyle.module.css'
// import Form from './components/Form';
// import LifeCycleA from './LifeCycleA';
// import counter from './components/counter';
// import ComponetC from './components/ComponetC';
// import { UserProvider } from './components/userContext';
// import PostList from './components/PostList';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return(
    <div className='App'>
      <UserContext.Provider value={'eren'}>
        <ChannelContext.Provider value={'yeager'}>
          <ComponetC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

// class App extends Component {
//   render() {
//     return(
//       <div className="App">
//         <UserContext.Provider value={'monkey D'}>
//           <ChannelContext.Provider value={'luffy'}>
//            <ComponetC />
//           </ChannelContext.Provider>
//         </UserContext.Provider>
        {/* <MemoComp></MemoComp> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
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
           {/* <StyleSheet primary={true}/> */}
           {/* <Inline/> */}
           {/* <Form></Form> */}
           {/* <LifeCycleA/> */}
           {/* <Table /> */}
           {/* <FragmentDemo/> */}
           {/* <RegComp/> */}
           {/* <ParentComp/> */}
           {/* <RefsDemo></RefsDemo> */}
           {/* <FocusInput /> */}
           {/* <FRParentInput /> */}
           {/* <PortalDemo /> */}
           {/* <ErrorBoundary> */}
           {/* <Hero herosName = "Batman"/> */}
           {/* <Hero herosName = "Superman"/> */}
           {/* <Hero herosName = "Joker"/> */}
           {/* </ErrorBoundary> */}
           {/* <ClickCounter name = 'luffy'/> */}
           {/* <HoverCounter /> */}
           {/* <ClickCounterTwo />
           <HoverCounterTwo />
           <User render={(isLoggedIn) => isLoggedIn ? 'luffy' : 'goku'}/> */}
           {/* <UserProvider value='zoro'> */}
            {/* <ComponetC /> */}
           {/* </UserProvider> */}
           {/* <PostList /> */}
           {/* <PostForm /> */}
           {/* <ClassCounter /> */}
           {/* <HookCounter /> */}
           {/* <HookCounterTwo /> */}
           {/* <HookCounterThree /> */}
           {/* <HookCounterfour /> */}
           {/* <HookCounterOne /> */}
           {/* <ClassCounterOne /> */}
           {/* <ClassMouse /> */}
           {/* <HookMouse /> */}
           {/* <MouseContainer /> */}
           {/* <IntervalClassCounter /> */}
           {/* <IntervalHookCounter /> */}
           {/* <DataFetching /> */}
      // </div> 

    // );
  // }
// }

export default App;
