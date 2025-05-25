// This code is used to manipulate the DOM elements on a webpage
// getElementsByTagName selects all elements with the specified tag name
document.getElementsByTagName("li")[1].textContent="Lists new"

// getElementById selects an element by its ID
document.getElementById("about-heading").innerHTML="About html"

// getElementsByClassName selects all elements with the specified class name
document.getElementsByClassName("para")[0].style.color="blue"

// querySelector selects the first element that matches the specified CSS selector
document.querySelector("h1").style.color="red"
document.querySelector("h1#heading").innerHTML="Welcome to DOM tutorial"
// querySelectorAll selects all elements that match the specified CSS selector
document.querySelectorAll("p")[0].innerHTML="This is for dom manipulation using javascript"

// classlist in css
// hide the paragraph element by adding classlist in css
document.querySelector("p").classList.add("hide");

// attribute manipulation
document.querySelector("a").setAttribute("href", "https://www.google.com");
