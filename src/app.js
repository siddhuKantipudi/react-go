
const app = {
    title: "My first react project",
    subtitle: "work hard play hard",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value;
    }
    render();
}

const showRandomOption = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const randomOption = app.options[randomNum];
    alert(randomOption);
}

const onRemoveOptions = () => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "two options" : "no options" }</p>
            <button onClick={onRemoveOptions}>Remove Options</button>
            <button onClick={showRandomOption}>Random Option</button>
            <ul>
                {
                    app.options.map( (option) => {
                       return <li key={Math.random()}>{option}</li>
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();



