import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import ProductList from './componentes/ProductList';
import Details from './componentes/Details';
import Cart from './componentes/Cart/Cart';
import Default from './componentes/Default';
import {Switch, Route} from 'react-router-dom';
import Modal from './componentes/Modal';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
