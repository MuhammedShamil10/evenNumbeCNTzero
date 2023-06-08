import React from 'react'
// import logo from './logo.svg';
import './App.css';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
// import CounterMemo from './components/CounterMemo';
// import FocusInput from './components/FocusInput';
// import ParentComponent from './components/ParentComponent';
// import Title from './components/Title';
// import Count from './components/Count';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import DataFetchingOne from './components/DataFetchingOne';
// import CounterThree from './components/CounterThree';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import ComponentFf from './components/ComponentFf';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import ComponetC from './components/ComponetC';
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
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
    
//     switch(action) {
//      case 'increment':
//         return state + 1;
//      case 'decrement':
//         return state - 1;   
//      case 'reset':
//         return initialState;
//      default:
//         return state;
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return(
      // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className='App'>
      <DocTitleOne />
      <DocTitleTwo />
     {/* <ParentComponent /> */}
     {/* <CounterMemo /> */}
     {/* <FocusInput /> */}
     {/* <ClassTimer /> */}
     {/* <HookTimer /> */}
      {/* <DataFetchingTwo /> */}
      {/* Count - {count} */}
      {/* <ComponentA /> */}
      {/* <ComponentB /> */}
      {/* <ComponentFf /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <UserContext.Provider value={'eren'}>
        <ChannelContext.Provider value={'yeager'}>
          <ComponetC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    {/* </CountContext.Provider> */}
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
