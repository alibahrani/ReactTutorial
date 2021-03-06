import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        notes: '',
        amount : ''

    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onNoteChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({notes}));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)) {

            this.setState(() => ({amount}));
        } 
    }
    render() {
        return (
            <div>
               <form>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                <input type="text"
                    placeholder="Amount"
                    value = {this.state.amount}
                    onChange=   {this.onAmountChange}
                    />
                <textarea placeholder="Add a note for your expense"
                    value={this.state.notes}
                    onChange={this.onNoteChange}></textarea>
                <button>Add Expense</button>
               </form>
            </div>
        )
    }


}