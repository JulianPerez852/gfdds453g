import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca
const root = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/page1"></IndexRedirect>
      <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
);


ReactDOM.render(root, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
