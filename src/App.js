import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/CheckOut/CheckOut'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Layout>
        <Route path='/' exact component={BurgerBuilder}/>
        <Route  path='/checkout' component={CheckOut}/>
      </Layout>
    </div>
  );
}

export default App;
