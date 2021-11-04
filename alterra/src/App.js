// STYLING
import './App.css';

//PAGES
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import Todo from './pages/Todo/Todo';
import TodoClass from './pages/Todo/TodoClass';

//STUFF FROM REACT
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      {/* <Todo /> */}
      <TodoClass />
    </div >
  );
}

export default App;
