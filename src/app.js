
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
            <p>{app.options.length}</p>
            <button onClick={onRemoveOptions}>Remove Options</button>
            <ul>
                <li>first option</li>
                <li>second option</li>
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button type="button" onClick={onRemoveOptions}>Remove Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();



