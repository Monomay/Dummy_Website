import React from 'react';
import NavBar from './navBar';
import Header from './Header';
import { Route } from 'react-router-dom';
import PostDetails from './PostDetails';
import About from './About';

const App = () => {
  return (
    <>
      <NavBar />

      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/details/:id">
        <PostDetails />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </>
  )
}

export default App
