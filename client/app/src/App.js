import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Layout from './App/Layout';
import NotFound from './App/NotFound';
import Home from './Pages/Home';
import AddUrl from './Pages/AddUrl';
import '../styles/styles.scss';

export default function App(){
  return(
    <div>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddUrl}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </Router>
    </div>
  );
}
