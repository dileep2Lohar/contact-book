import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './component/element/header';
import Contact from './component/contact/Contact';
import Addcontact from './component/contact/Addcontact';

import {Provider} from 'react-redux'
import Store from './Store'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider store={Store}>
      <div>
      <Header />
        <div className="container">
          <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact}/>
                <Route exact path="/contact" component={Addcontact}/>
              </Switch>
          </div>
        </div>
    </div>
    </Provider>
  );
}

export default App;
