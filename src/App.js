import './App.css';
import Body from "./components/Body";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import "./styling.css";

function App() {
  return (
    <div className='"App'>
         <Body/>
        <FunctionalComponent />
        <ClassComponent />
    </div>
  );
}
export default App;