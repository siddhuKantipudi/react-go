"use strict";

var app = {
    title: "My first react project",
    subtitle: "work hard play hard"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "first item"
        ),
        React.createElement(
            "li",
            null,
            "second item"
        )
    )
);

var userName = "Sid Kantipudi";
var userAge = "26";
var userLocation = "Maryville";

var user = {
    name: userName,
    age: userAge,
    location: userLocation
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location,
        " "
    )
);

ReactDOM.render(template, document.getElementById('app'));
