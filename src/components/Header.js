class App extends React.Component {
    render() {
        const title = "Todoist";
        const options = ["first Option", "second option", "third option"];
      return  <div>
                <Header title={title}/>
                <Options options={options}/>
                <Action/>
        </div>
    }
}

class Header extends React.Component {
    render() {
        return <h1>{this.props.title}</h1>
    }
}

class Options extends React.Component {
    handleRemoveAllOptions() {
        alert('remove');
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) =><Option key={option} OptionText={option}/>)
                }
                <button onClick={this.handleRemoveAllOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <li>{this.props.OptionText}</li>
    }
}

class Action extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.newOption.value;
        if(option) {
            alert(1);
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="newOption"/>
                <button>Add option</button>
            </form>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
