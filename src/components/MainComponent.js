
import React, { Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Menu from './MenuComponent.js';
import Home from './HomeComponent.js';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    }
  }
  render(){
  const HomePage = () => {
      return (
        <Home />
      );
  }
  return (
    <div className='App'>
      <Header />
         <Switch>
             <Route path='Home' component={HomePage} />
             <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
             <Redirect to='/home' />
         </Switch>
      <Footer />
    </div>
  );
  }
}

export default Main;