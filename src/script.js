import CircleType from "https://cdn.skypack.dev/circletype@2.3.0";

// Instantiate `CircleType` with an HTML element.
const circleType = new CircleType(document.getElementById("title"));

// Set the text radius and direction. Note: setter methods are chainable.
circleType.radius(700).dir(1);
