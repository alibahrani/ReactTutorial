export const setTextFilter = (text = '') => ({
    type:"TEXT_FILETER",
    text
});

//Sort By Date 
export const sortByDate = (value = 'Date') => ({
type:"SORT_BY_DATE", 
    value
});
export const sortByAmount = (value = 'Amount') => ({
    type:"SORT_BY_AMOUNT", 
    value
});

//SET BY START DATE

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
});
//SET BY END DATE
export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
});