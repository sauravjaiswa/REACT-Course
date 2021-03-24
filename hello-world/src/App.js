import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/HelloJSX'
import Message from './components/Message'
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Bruce' heroName="Batman">
        <p1>This child of Bruce</p1>
      </Greet>
      <Welcome/>
      <Hello/>
      <Message/> */}
      {/* <Counter/> */}
      {/* <ParentComponent/> */}
      {/* <Greet name='Clarke' heroName="Superman"/> */}
      {/* <Welcome name='Clarke' heroName="Superman"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      <EventBind/>
    </div>
  );
}

export default App;
