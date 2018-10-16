import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Router from './router'
import Footer from './components/layout/footer'
import Header from './components/layout/header'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route component={Header} />
        <Route component={Router} />
        <Route component={Footer} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
