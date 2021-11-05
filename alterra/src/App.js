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
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [navIsOpen, setNavIsOpen] = useState(true)

  const handleCloseNav = () => {
    setNavIsOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Navbar component={<Todo />}
            tab='home' closeNav={handleCloseNav} navIsOpen={navIsOpen} /></Route>
          <Route path="/about-author"><Navbar component={<AboutAuthor />}
            tab='about-author' closeNav={handleCloseNav} navIsOpen={navIsOpen} /></Route>
          <Route path="/about-app"><Navbar component={<AboutApp />}
            tab='about-app' closeNav={handleCloseNav} navIsOpen={navIsOpen} /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
