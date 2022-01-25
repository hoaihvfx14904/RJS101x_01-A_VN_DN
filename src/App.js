import logo from './logo.svg';
import React, { Component} from 'react';
import {DISHES} from './shared/dishes.js';
import Menu from './components/MenuComponents.js'
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }
  render(){
  return (
    <div className='App'>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante on Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}/>
     
    </div>
  );
  }
}

export default App;
