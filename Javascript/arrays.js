var a = ["apple", "banana", "cherry"];

a.push("date"); // Adds "date" to the end of the array
a.unshift("apricot"); // Adds "apricot" to the beginning of the array
a.pop(); // Removes the last element ("date")
a.shift(); // Removes the first element ("apricot")
a.splice(1, 1); // Removes the second element ("banana")
a.sort(); // Sorts the array alphabetically 
a.reverse(); // Reverses the order of the array
a.indexOf("cherry"); // Returns the index of "cherry" (2)   
a.includes("apple"); // Returns true if "apple" is in the array
a.join(", "); // Joins the array elements into a string, separated by ", " ("cherry, apple")
a.slice(1, 3); // Returns a new array with elements from index 1 to 2 (["apple", "cherry"])
a.concat(["fig", "grape"]); // Combines with another array, returns a new array (["cherry", "apple", "fig", "grape"])
a.forEach(function(item) { // Iterates over each item in the array
    console.log(item);
});