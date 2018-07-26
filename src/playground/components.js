class App extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);

        this.state= {
            options: props.options
        }
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        console.log(randomOption);
    }

    handleRemoveAllOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleRemoveOption(optionToRemove) {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option  )
        }));
    }

    handleAddOption(option) {
        if(!option) {
            return "enter valid option";
        } else if(this.state.options.indexOf(option) !== -1) {
            return "enter valid unique option";
        }

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() {
        const title = "Todoist";
      return  <div>
                <Header title={title} subtitle="focus"/>
                <Options 
                    options={this.state.options}
                    handleRemoveAllOptions = {this.handleRemoveAllOptions}
                    handleRemoveOption = {this.handleRemoveOption}
                />
                <Action 
                    handlePick = {this.handlePick}
                    hasOptions = {this.state.options.length > 0}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
        </div>
    }
}

App.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </header>
    )
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        OptionText={option}
                        handleRemoveOption = {props.handleRemoveOption}
                    />
                ))
            }
            <button onClick={props.handleRemoveAllOptions}>Remove All</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li>{props.OptionText}</li>
            <button 
                onClick = {(e) => {
                    props.handleRemoveOption(props.OptionText);
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error  = this.props.handleAddOption(option);
      this.setState (() => ({ error }));
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            {this.state.error && <p>{this.state.error}</p>}
            <button>Add Option</button>

          </form>
        </div>
      );
    }
}

const Action = (props) => {
    return (
        <div>
          <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
          >
            What should I do?
          </button>
        </div>
      );
}

ReactDOM.render(<App options={["option 1","option 2","option 3"]}/>, document.getElementById('app'));
