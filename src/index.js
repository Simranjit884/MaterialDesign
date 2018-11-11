import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import AutoCompleteExampleFilters from './components/autocompleteexample';
import Reducers from './reducers';
import companies from './components/companies';

const createStoreWithMiddleware=applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
            <Route path="/companies/list" component={AutoCompleteExampleFilters} />
            <Route path="Companies/:id" component={companies} />
            <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>
    </Provider>
    ,document.getElementById('root'));
