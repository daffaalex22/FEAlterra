// STYLING
import './App.css';

//PAGES
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import Todo from './pages/Todo/Todo';

//STUFF FROM REACT
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
      </BrowserRouter> */}
      <Todo />
    </div>
  );
}

export default App;
