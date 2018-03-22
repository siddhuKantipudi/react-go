let visibility = false;

const showHideOptions = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template  = (
        <main>
            <h1>Visibility Toggle App</h1>
            <button onClick={showHideOptions}>
                {visibility ? "Hide details" : "Show Details"}
            </button>
            {
                visibility && (
                    <p id="custom">this is what you are looking for</p>
                )
            }
            
        </main>
    )
    ReactDOM.render(template, document.getElementById('app'));
}

render();



