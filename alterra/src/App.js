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
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [navIsOpen, setNavIsOpen] = useState(true);
  // const [pageWidth, setPageWidth] = useState('88vw');
  // const [pageStyle, setPageStyle] = useState({
  //   width: pageWidth
  // })

  const handleCloseNav = () => {
    setNavIsOpen(false)
  }

  const handleOpenNav = () => {
    setNavIsOpen(true)
  }

  // useEffect(() => {
  //   if (!navIsOpen) {
  //     setPageWidth('100vw')
  //   }
  //   else {
  //     setPageWidth('88vw')
  //   }
  // }, [navIsOpen])

  // useEffect(() => {
  //   setPageStyle({
  //     width: pageWidth
  //   })
  // }, [pageWidth])

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/"><Navbar component={<Todo /*pageStyle={pageStyle}*/ />}
            tab='home' openNav={handleOpenNav} closeNav={handleCloseNav} navIsOpen={navIsOpen} /*pageStyle={pageStyle}*/ /></Route>
          <Route path="/about/about-author"><Navbar component={<AboutAuthor /*style={pageStyle}*/ />}
            tab='about-author' openNav={handleOpenNav} closeNav={handleCloseNav} navIsOpen={navIsOpen} /*pageStyle={pageStyle}*/ /></Route>
          <Route path="/about/about-app"><Navbar component={<AboutApp /*style={pageStyle}*/ />}
            tab='about-app' openNav={handleOpenNav} closeNav={handleCloseNav} navIsOpen={navIsOpen} /*pageStyle={pageStyle}*/ /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
