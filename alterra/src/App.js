// STYLING
import './App.css';

//PAGES
import Todo from './pages/Todo/Todo';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutApp from './pages/AboutApp/AboutApp';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Form from './pages/Form/Form';

//STUFF FROM REACT
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  // const [navIsOpen, setNavIsOpen] = useState(true);

  // const handleCloseNav = () => {
  //   setNavIsOpen(false)
  // }

  // const handleOpenNav = () => {
  //   setNavIsOpen(true)
  // }


  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Navbar
                component={<Form />}
                tab='form'
              // openNav={handleOpenNav}
              // closeNav={handleCloseNav}
              /*navIsOpen={navIsOpen}*/ />
            </Route>
            <Route path="/home">
              <Navbar
                component={<Todo />}
                tab='home'
              // openNav={handleOpenNav}
              // closeNav={handleCloseNav}
              // navIsOpen={navIsOpen} 
              />
            </Route>
            <Route path="/about/about-author">
              <Navbar
                component={<AboutAuthor />}
                tab='about-author'
              // openNav={handleOpenNav}
              // closeNav={handleCloseNav}
              // navIsOpen={navIsOpen} 
              />
            </Route>
            <Route path="/about/about-app">
              <Navbar
                component={<AboutApp />}
                tab='about-app'
              // openNav={handleOpenNav}
              // closeNav={handleCloseNav}
              // navIsOpen={navIsOpen} 
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div >
      </BrowserRouter>
    </Provider>
  );
}

export default App;
