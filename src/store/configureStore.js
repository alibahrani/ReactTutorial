import { createStore, combineReducers } from 'redux';
import expesesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default() => {
    const store = createStore(
        combineReducers({
            expenses: expesesReducer,
            filters: filterReducer 
        })
    ); 
    return store; 
};
