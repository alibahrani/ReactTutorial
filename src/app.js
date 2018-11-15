import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {AddExpense, addExpense} from './actions/expenses'; 
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 40, createdAt: 15021998}));
store.dispatch(addExpense({ description: 'gas Bill'}));
store.dispatch(addExpense({ description: 'Rent', amount: 1025}));

const state = store.getState(); 
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

const jsx= (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
