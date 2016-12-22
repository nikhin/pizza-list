import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import {Filter} from './src/filter';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={Filter} />
    </Router>,
    document.getElementById('content')
);
