import {createStore} from 'redux';
//Action generators - functions that return action objects 

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT', 
        incrementBy
});
const decrementCount = ({decrementBy = 1}= {}) => ({
 type:'DECREMENT',
 decrementBy
});

const setCount = ({count = 101} = {}) => ({
    type:"SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});


//Reducers 
//1. reducers are pure functions
//2. Never change state or action 

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count +action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.count
            }
        default: 
        return state;
    }
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
console.log(store.getState());
});



//Actions - than an object that gets sent to the store 

//increment, decrement , reset 
store.dispatch(incrementCount({count:5}));
store.dispatch(setCount({count: 90}));
store.dispatch({
    type: 'INCREMENT',
    incrementBy:5
});
store.dispatch(incrementCount({ incrementBy:7}));
store.dispatch(decrementCount());
store.dispatch(resetCount());


//decremntBy