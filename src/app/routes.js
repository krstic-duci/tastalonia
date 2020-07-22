import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import SingleRecipe from '../components/recipe/SingleRecipe';
import Recipes from '../components/Recipes';
import Profile from '../components/Profile';
import SingleKitchenware from '../components/shop/SingleKitchenware';
import Kitchenwares from '../components/shop/Kitchenwares';
import SingleBakeware from '../components/shop/SingleBakeware';
import Bakewares from '../components/shop/Bakewares';
import Shop from '../components/Shop';
import Home from '../components/Home';
import NoMatch from '../components/404';

export default function Routes() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/recipes/:id' component={SingleRecipe} />

        <Route path='/recipes' component={Recipes} />

        <Route path='/profile' component={Profile} />

        <Route path='/shop/kitchenwares/:id' component={SingleKitchenware} />

        <Route path='/shop/kitchenwares' component={Kitchenwares} />

        <Route path='/shop/bakewares/:id' component={SingleBakeware} />

        <Route path='/shop/bakewares' component={Bakewares} />

        <Route path='/shop' component={Shop} />

        <Route path='/' component={Home} />

        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}
