import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Signin from './components/Signin';
import Admin from './components/Admin';
import Signup from './components/Signup';
import CartScreen from './components/CartScreen';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import {Provider} from 'react-redux';

function App() {

  return (
    
    <div className = "App">
    <BrowserRouter>
    <Provider store = {store}>
    <div className="grid-container">
      <Navbar /> 
  
    <main className="main">
      <div className="">
      <Route path="/details/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/signin" component={Signin} />
          <Route path="/admin" component={Admin} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={CartScreen} />
      </div>
    </main>
    
    <div className="footer">
       <footer>All rights Resereved</footer>
       </div>

    </div>
    </Provider>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
