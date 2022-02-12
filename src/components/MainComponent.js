
import React, { Component} from 'react';
import {DISHES} from '../shared/dishes.js';
import Menu from './MenuComponent.js';
import Home from './HomeComponent.js';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Contact from './ContactComponent.js';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotion';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }
  render(){
  const HomePage = () => {
    return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
    );
  }
  const DishWithId = ({match}) => {
    return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
  };
  return (
    <div className='App'>
      <Header />
       <div>
         <Switch>
             <Route path='/home' component={HomePage} />
             <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
             <Route path='/menu/:dishId' component={DishWithId} />
             <Route path='/contactus' component={Contact} />
            
             <Redirect to='/home' />
         </Switch>
         </div>
      <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps)(Main));