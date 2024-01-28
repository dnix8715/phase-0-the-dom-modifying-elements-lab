// index.js

// Create a new header element
const newHeader = document.createElement("h1");

// Set the id of the header to 'victory'
newHeader.id = "victory";

// Set the text content of the header
newHeader.textContent = "Dominic is the champion";

// Append the header to the main element in the DOM
document.getElementById("main").appendChild(newHeader);
document.body.appendChild(newHeader);
document.getElementById("main").remove();
