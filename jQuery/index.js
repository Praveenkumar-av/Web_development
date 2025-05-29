// jQuery for selecting elements
$("h1");  // Selects all <h1> elements, 
// equivalent to document.querySelectorAll("h1")

// jQuery for getting the text of an element
console.log($("h1").text());  // Gets the text content of all <h1> element
// jquery for setting the text of an element
$("h1").text("Hello, World!");  // Sets the text of all <h1> element

// jQuery for getting the HTML content of an element
console.log($("button").html());  // Gets the HTML content of all <h1> element
// jQuery for setting the HTML content of an element
$("button").html("new button");  // Sets the HTML content of all <h1> element

// jQuery for getting the css style of an element
console.log($("h1").css("color"));
// jQuery for setting the css style of an element
$("h1").css("color", "blue");

// jQuery for adding a class to an element
$("h1").addClass("highlight");
// jQuery for removing a class from an element
// $("h1").removeClass("highlight");

// jQuery for adding an event listener to an element
$("button").on("click", function() {
    alert("Button clicked!");
});
// jQuery for removing an event listener from an element
// $("button").off("click");

// jQuery for adding a new element to the DOM
$("body").append("<p>New paragraph added!</p>");  // Adds a new <p> element to the body 