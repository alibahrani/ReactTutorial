import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'; 
//ADD_EXPENSES
const addExpense = ({
    description = '', 
    note = '', 
    amount=0, 
    createdAt= 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE 
const editExpense = (id, updates) => (
{
    type: 'EDIT_EXPENSE',
    id,
    updates
}
);

const setTextFilter = (text = '') => ({
    type:"TEXT_FILETER",
    text
});

//Sort By Date 
const sortByDate = (value = 'Date') => ({
    type:"SORT_BY_DATE", 
    value
});
const sortByAmount = (value = 'Amount') => ({
    type:"SORT_BY_AMOUNT", 
    value
});

//SET BY START DATE

const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
});
//SET BY END DATE
const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
});

//GET Visible Expenses
const getVisibleExpenses = (expenses, filters) => {
    return expenses;
}

const expensesReducerDefaultState = [];
//Expenses Reducer 
//first 
const expesesReducer = (state= expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) =>  id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense;
                }
            })
        default: 
            return state;
    }
};
//Filter Reducer
const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state= filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'TEXT_FILETER': 
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.value
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.value
            };
        case 'SET_START_DATE': 
            return {
                ...state, 
                startDate: action.startDate
            };
        case 'SET_END_DATE': 
            return {
                ...state, 
                endDate: action.endDate
            }
        default: 
            return state;
    }
}

//second
//Store creation 
const store = createStore(
    combineReducers({
        expenses: expesesReducer,
        filters: filterReducer 
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpneses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpneses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 900}));
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('aaa'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(225));

 
const demoState = {
    expenses: [{
        id:'pasdfag',
        description: 'January Rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount 
        startDate: undefined, 
        endDate: undefined
    }
};

