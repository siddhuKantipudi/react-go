"use strict";

var app = {
    title: "My first react project",
    subtitle: "work hard play hard",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value;
    }
    render();
};

var onRemoveOptions = function onRemoveOptions() {
    app.options = [];
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options && app.options.length > 0 ? "two options" : "no options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveOptions },
            "Remove Options"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                "first option"
            ),
            React.createElement(
                "li",
                null,
                "second option"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            ),
            React.createElement(
                "button",
                { type: "button", onClick: onRemoveOptions },
                "Remove Options"
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

render();
