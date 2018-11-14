//Filter Reducer
const filterReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};
export default (state= filterReducerDefaultState, action) => {
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

