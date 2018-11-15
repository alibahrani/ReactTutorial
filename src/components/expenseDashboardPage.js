import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseList  from './ExpenseList';
import ExpenseListFilters from './ExpensesListFilter';
const expenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);


export default expenseDashboardPage;