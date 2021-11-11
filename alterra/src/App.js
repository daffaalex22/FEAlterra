// STYLING
import './App.css';

//PAGES
import Todo from './pages/Todo/Todo';
import AboutAuthor from './pages/AboutAuthor/AboutAuthor';
import AboutApp from './pages/AboutApp/AboutApp';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './pages/Navbar/Navbar';
import Form from './pages/Form/Form';


//STUFF FROM REACT
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Navbar
                component={<Form />}
                tab='form'
              />
            </Route>
            <Route path="/home">
              <Navbar
                component={<Todo />}
                tab='home'
              />
            </Route>
            <Route path="/about/about-author">
              <Navbar
                component={<AboutAuthor />}
                tab='about-author'
              />
            </Route>
            <Route path="/about/about-app">
              <Navbar
                component={<AboutApp />}
                tab='about-app'
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
