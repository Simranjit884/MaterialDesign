import {combineReducers} from 'redux';
import CompaniesReducer from './reducer_companies';
//import CompaniesNameReducer from './reducer_companies_name';

const rootReducer=combineReducers({
    comp:CompaniesReducer
});

export default rootReducer;