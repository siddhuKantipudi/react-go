// setup defualt value to 0

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.count
        }
    }
    
    increment() {
        this.setState((previousCount) => {
            return {
                count : previousCount.count + 1
            }
        });
    }

    decrement() {
        this.setState((previousCount) => {
            return {
                count : previousCount.count - 1
            }
        });
    }

    reset() {
        this.setState(() =>{
            return {
                count : 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count : 0
}

ReactDOM.render(<Counter count={5}/>, document.getElementById('app'));
