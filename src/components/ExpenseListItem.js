//export a stateless functional componenet 
// description , amount , createdAt 
import React from 'react';  

const ExpenseListItem = (expense) => (
    <div key={expense.id}>
        <h3>{expense.description}</h3>
        <p>{expense.amount}</p>
        <p>{expense.createdAt}</p>
    </div>
);
export default ExpenseListItem;