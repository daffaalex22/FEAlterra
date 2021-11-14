// STYLING
import './App.css';

//PAGES
import Home from './pages/Home/Home'
import ContactUs from './pages/ContactUs/ContactUs';
import ReviewMessage from './pages/ReviewMessage/ReviewMessage';
import News from './pages/News/News';

//STUFF FROM REACT
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
