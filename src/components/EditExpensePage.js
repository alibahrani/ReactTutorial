import React from 'react';
const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            this is from my Edit Expensses component with id of {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;