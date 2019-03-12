import React from 'react';

// Switch if for switching between pages
// Route is for defining a route
import { Switch, Route } from 'react-router-dom';

// This pages are connected to routes
import Tops from './pages/Tops'; // Show the statistics of players
import Brands from './pages/Brands'; // Show the statistics of players
import BrandTops from './pages/BrandTops'; // Show the statistics of players

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Tops} />
      <Route path="/brands" component={Brands} />
      <Route path="/brand/:brand_id" component={BrandTops} />
    </Switch>
  </main>
);

export default Main;
