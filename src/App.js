import './App.css';
import Form from './Form';
import {useSelector} from "react-redux";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const state= useSelector((state)=>({...state}));
  console.log("state",state);
  return (
    <div className="App">
      <Router>
          <Routes >
            <Route path="/" element={<Form/>}></Route>
            <Route path="/todolist" element={<TodoList/>}></Route>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
