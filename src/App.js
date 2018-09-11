import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Fab from './components/Fab/Fab';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/foods/:nutrientId" component={Foods} />
          </Switch>
          <Fab />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
