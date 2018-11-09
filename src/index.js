import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import App from './components/App';
import Companies from './components/companies';
import AutoCompleteExampleFilters from './components/autocompleteexample';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
            <Route path="/companies/list" component={AutoCompleteExampleFilters} />
            <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
