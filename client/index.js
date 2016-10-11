import {Router, Route, browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

// Buscar
import Index from './components/Index.component.jsx';

const basename = '/';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={basename} component={Index}></Route>
  </Router>, 
  document.getElementById('root')
);
