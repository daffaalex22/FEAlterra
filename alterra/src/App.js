// STYLING
import './App.css';

//PAGES
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs';
import ReviewMessage from './pages/ReviewMessage/ReviewMessage';

//STUFF FROM REACT
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/review-message">
            <ReviewMessage />
          </Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
