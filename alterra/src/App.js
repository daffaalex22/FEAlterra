// STYLING
import './App.css';

//PAGES
import Todo from './pages/Todo/Todo';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutApp from './pages/AboutApp/AboutApp';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';


//STUFF FROM REACT
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Navbar component={<Todo />} /></Route>
          <Route path="/about-author"><Navbar component={<AboutAuthor />} /></Route>
          <Route path="/about-app"><Navbar component={<AboutApp />} /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
