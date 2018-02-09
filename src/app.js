
var app = {
    title: "My first react project",
    subtitle: "work hard play hard"
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>first item</li>
            <li>second item</li>
        </ol>
    </div>
);

var userName = "Sid Kantipudi";
var userAge = "26";
var userLocation = "Maryville";

var user = {
    name: userName,
    age: userAge,
    location: userLocation
}


var template2 = (
   <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location} </p>
   </div>
);

ReactDOM.render(template, document.getElementById('app'));
