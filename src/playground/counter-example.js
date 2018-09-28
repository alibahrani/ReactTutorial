
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    componentDidMount() {
        const number = parseInt(localStorage.getItem('count'), 10);
        if(!isNaN(number)) {

            this.setState(()=> ({ count: number }));
        }

    }

    componentDidUpdate(prevState){
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });  
    }
    handleMinusOne(){
       this.setState((prevState) => {
        return {
            count: prevState.count - 1
        };
       });
    }

    handleReset(){
        this.setState((prevState) => {
           return {
               count: 0
        };
               
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}




ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('addOne');

//     renderCounterApp();
// };

// const minusOne = () => {
//     if(count <= 0) {
//         console.log('minus one');
//     }else {
//         count--;
//     }

    
//     renderCounterApp();
// };

// const resetButton = () => {
//     count = 0;
//     renderCounterApp();
// }
// const someId = 'myId'


// //Make a button "-1" -setup minusOne function and register -log "minus one"

// //make a reset button "reset" - setup reset function  - log "reset"
// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const temp = (
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>01</button>
//             <button onClick={resetButton}>Reset</button>
//         </div>
        
//     );
//     ReactDOM.render(temp, appRoot);
    
// }

// renderCounterApp();
