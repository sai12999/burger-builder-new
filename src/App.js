import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import { Route } from 'react-router-dom'
import Orders from './containers/Orders/Orders'

function App() {
  return (
    <div >
      <Layout>
        <Route exact path='/'  component={BurgerBuilder} />
        <Route  path='/checkout'  component={CheckOut} />
        <Route path='/orders' component={Orders}/>
      </Layout>
    </div>
  );
}

export default App;
