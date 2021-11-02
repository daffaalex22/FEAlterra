import './App.css';
import Home from './Home';
import ContactUs from './ContactUs';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
