// Create Componenet VisibilityToggle - render, constructor , onClick handleToggleVisisbility 
//State visibility -> false 
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props); 
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
          <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide': 'Show'} Details</button>
            {
                this.state.visibility && (
                    <div>
                        <p>Hey. this is a test from Summary show</p>
                    
                    </div>
                )
            }
          </div>  
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
