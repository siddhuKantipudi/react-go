class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility : false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }
    
    render() {
        return (
            <main>
                <h1>Visibility Toggle App</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show Details"}
                </button>
                {
                    this.state.visibility && (
                        <p>this is what you are looking for</p>
                    )
                }
                
            </main>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));
