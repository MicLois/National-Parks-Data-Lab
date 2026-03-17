// National Parks Data Lab - Starter File
// U.S. National Park Service Data Analysis Practice
//
// Work through each task in order.
// Your results appear on the page in the browser.
// Save this file and refresh the browser after each change.
//
// Three display functions are available (defined in display.js):
//
//   showSection("title")            - adds a labeled section header to the page
//   show("label", value)            - displays any value on the page
//   showTable("label", array)       - displays an array of objects as a table
//
// Loop tasks still use console.log() inside the loop body.
// Open DevTools (F12 / Cmd+Option+I) to see console output.

// ============================================================
// PART 1: ARRAYS
// ============================================================

showSection("Part 1: Arrays");
// REMEMBER !!!!!!!!
//show("label", value) so ("string output", 'Park')

// ---- Task 1: Create an Array ----
// Create a const variable called parkNames.
// Assign it an array of at least 6 U.S. national park names as strings.
// Display the array using show().

// TODO: Create the parkNames array here
const parkNames = [
  "Yellowstone",
  "Grand Canyon",
  "Yosemite",
  "Zion",
  "Rocky Mountain",
  "Glacier",
];

// TODO: show("Task 1: Parks Array", parkNames)
show("Task 1: Parks Array", parkNames);

// ---- Task 2: Access Elements by Index ----
// Remember: the first element is at index 0.
// Display the first park, the last park, and any park in the middle.
// Hint: use parkNames.length - 1 to get the index of the last item.
// Use show() for each one.

// TODO: show the first park using bracket notation
//show(parkNames[0]); prints undefined

show("Task 2: First Park", parkNames[0]);

// TODO: show the last park using parkNames.length - 1
//show(parkNames.length -1) outputs 5 not the park name w/ undefined
show("Task 2: Last Park", parkNames[parkNames.length - 1]);

// TODO: show any park in the middle
show("Task 2: The Best Park", parkNames[4]);

// ---- Task 3: Loop with a Standard for Loop ----
// Write a for loop that goes through every item in parkNames.
// Inside the loop, use console.log() to log: "Park #0: Yellowstone", etc.
// Use the index variable to show the position number and the value.

showSection("Task 3: Standard for Loop (check console)");

// TODO: Write a for loop here
for (let i = 0; i < parkNames.length; i++) {
  //console.log("Park #" + i + ": " + parkNames[i]);
  console.log("Park #" + i + ": " + parkNames[i]);
}

// ---- Task 4: Loop with for...of ----
// Write a for...of loop that goes through every item in parkNames.
// Use console.log() inside the loop to log each park name.
showSection("Task 4: for...of Loop (check console)");

// TODO: Write a for...of loop here
for (const i of parkNames) {
  console.log(i);
}

// ---- Task 5: Loop with forEach ----
// Call .forEach() on parkNames.
// Pass a function that receives each park name and logs it with console.log().

showSection("Task 5: forEach (check console)");
// REMEMBER !!!!!!!!

// TODO: Call parkNames.forEach() here
parkNames.forEach((parkNames, i) => {
  console.log(parkNames);
});

// ---- Task 6: Use map() to Transform the Array ----
// Use .map() to create a new array called officialNames.
// Each item should be the park name with " National Park" added to the end.
// Example: "Yellowstone" becomes "Yellowstone National Park"
// Show both the original and the new array. The original should not change.

// TODO: Create officialNames using .map()
const officialNames = parkNames.map((i) => i + " National Park");

show("Task 6: Original parkNames (unchanged)", parkNames);
show("Task 6: officialNames from map()", officialNames);

// ---- Task 7: Use filter() to Narrow Down ----
// Use .filter() to create a new array called longParkNames.
// Include only park names that are longer than 7 characters.
// Show the new array.

// TODO: Create longParkNames using .filter()
const longParkNames = parkNames.filter((park) => park.length > 7);

show("Task 7: Names longer than 7 characters", longParkNames);

// ---- Task 8: Use find() to Locate One Item ----
// Use .find() on parkNames to get the first park name that starts with "G".
// Store the result in a variable called firstGPark.
// Show the result.
// Note: find() returns a single value, not an array.

// TODO: Use .find() here
const firstGPark = parkNames.find((i) => i.startsWith("G"));

show("Task 8: First park starting with G", firstGPark);

// ============================================================
// PART 2: OBJECTS
// ============================================================

showSection("Part 2: Objects");

// ---- Task 9: Create an Empty Object and Add Properties ----
// Create a const variable called myPark assigned to an empty object {}.
// Then, on separate lines, add these properties one at a time:
//   name, state, established (a year), entranceFee (a number), isWilderness (true)
// Show myPark after adding all the properties.

// TODO: Create myPark as an empty object

const myPark = {
  name: "Yosemite",
  state: "California",
  established: 1890,
  entranceFee: 20,
  isWilderness: true,
};

// TODO: Add name, state, established, entranceFee, isWilderness properties

show("Task 9: myPark (built property by property)", myPark);

// ---- Task 10: Create an Object with Literal Notation ----
// Create a const variable called otherPark using object literal notation.
// Define these properties inside the curly braces:
//   name, state, established, entranceFee
// Also add a property with a space in its name: "managed by" set to "National Park Service"
// Also add a nested object called location with properties: region and latitude
// Show otherPark after creating it.

// TODO: Create otherPark with object literal notation here
// person.name

const otherPark = {
  name: parkNames[1],
  state: "Arizona",
  established: 1919,
  entranceFee: 30,
  "managed by": "National Park Service",
  location: {
    region: "Northwestern Arizona",
    latitude: "36°03′19″N 112°07′19″W﻿",
  },
};

show("Task 10: otherPark (object literal)", otherPark);

// ---- Task 11: Dot Notation Access ----
// Show the name and the established year from otherPark using dot notation.

show("Task 11: otherPark.name", otherPark.name);

show("Task 11: otherPark.established", otherPark.established);

// ---- Task 12: Bracket Notation Access ----
// Show the state and the entranceFee from otherPark using bracket notation.
// Then create a variable called propertyToAccess set to the string "name"
// and use that variable inside bracket notation to access the property.

show('Task 12: otherPark["state"]', otherPark["state"]);

show('Task 12: otherPark["entranceFee"]', otherPark["entranceFee"]);

// TODO: Create propertyToAccess and use it inside bracket notation

// ---- Task 13: Access a Property with a Space in the Name ----
// Dot notation causes a SyntaxError for property names that contain a space.
// Use bracket notation to show the value of the "managed by" property.

show('Task 13: otherPark["managed by"]', otherPark["managed by"]);

// ---- Task 14: Delete a Property ----
// Use the delete keyword to remove the entranceFee property from otherPark.
// Show the value of otherPark.entranceFee before and after deletion.
// Show the full otherPark object after deletion to confirm it is gone.

show("Task 14: Before delete, .entranceFee", otherPark.entranceFee);

delete otherPark.entranceFee; // TODO: delete otherPark.entranceFee

// TODO: show the value of entranceFee AFTER delete (should be undefined)
show("Task 14: value of entranceFee AFTER delete", otherPark.entranceFee);

// TODO: show the full otherPark object
show("Task 14: show the full otherPark object", otherPark);

// ---- Task 15: Access Nested Objects ----
// Access the region value inside otherPark.location.
// First do it the longhand way (using an intermediate variable),
// then do it the shorthand way (chained dot notation).
// Show both results.

// TODO: Longhand - store otherPark.location in a variable, then access region from it
const longhand = otherPark.location;
const region = longhand.region;

//shorthand
const shorthandRegion = otherPark.location.region;

// TODO: show the region value from your intermediate variable

show("Task 15 shorthand", otherPark.location.region);

// ---- Task 16: Add a Method to an Object ----
// Add a method called getDescription to myPark.
// The method should return a sentence like:
//   "Yellowstone was established in 1872 in Wyoming"
// Call the method and show the result.

// TODO: Add a getDescription method to myPark
// Hint: myPark.getDescription = function() { ... }

myPark.getDescription = function () {
  return `"${this.name}e was established in ${this.established} in ${this.state}"`;
};

show("Task 16: myPark.getDescription()", myPark.getDescription());

// ---- Task 17: Use 'this' Inside a Method ----
// Create a new const variable called featuredPark using object literal notation.
// Give it: name, state, established, annualVisitors, and two methods:
//   getLabel    - returns "[name] National Park ([state])"
//   getAge      - returns how many years since it was established (use 2026)
// Inside both methods, use the 'this' keyword.
// Show both method results.
//
// Important: use the 'function' keyword, not an arrow function.
// Arrow functions do not have their own 'this'.

// TODO: Create featuredPark with getLabel and getAge methods using 'this'

const featuredPark = {
  name: "Glacier",
  state: "Montana",
  established: 1910,
  annualVisitors: 3115195,

  getLabel: function () {
    return `${this.name} National Park (${this.state})`;
  },

  getAge: function () {
    return 2026 - this.established; // doesn't work with brackets
  },
};

show("Task 17: featuredPark.getLabel()", featuredPark.getLabel());
show("Task 17: featuredPark.getAge()", featuredPark.getAge());

// ============================================================
// PART 3: ARRAYS OF OBJECTS
// ============================================================

showSection("Part 3: Arrays of Objects");

// ---- Task 18: Create an Array of Park Objects ----
// Create a const variable called parks.
// Assign it an array of at least 5 park objects.
// Each object should have: name, state, established, areaSqMiles, annualVisitors, entranceFee
// Display the array as a table using showTable().

// TODO: Create the parks array of park objects

const parks = [
  {
    name: "Yellowstone",
    state: "Wyoming",
    established: 1872,
    areaSqMiles: 3471,
    annualVisitors: 4000000,
    entranceFee: 35,
  },
  {
    name: "Grand Canyon",
    state: "Arizona",
    established: 1919,
    areaSqMiles: 1212,
    annualVisitors: 6000000,
    entranceFee: 35,
  },
  {
    name: "Yosemite",
    state: "California",
    established: 1890,
    areaSqMiles: 1169,
    annualVisitors: 5000000,
    entranceFee: 35,
  },
  {
    name: "Zion",
    state: "Utah",
    established: 1919,
    areaSqMiles: 229,
    annualVisitors: 4500000,
    entranceFee: 0, //edited to match some requirements below
  },
  {
    name: "Glacier",
    state: "Montana",
    established: 1910,
    areaSqMiles: 1000,
    annualVisitors: 3115195,
    entranceFee: 35,
  },
];

showTable("Task 18: Parks Inventory", parks);

// ---- Task 19: Loop Through the Array of Objects ----
// Use .forEach() to loop through parks.
// For each park, use console.log() to log a sentence like:
//   "Yellowstone (Wyoming) - Est. 1872"

// TODO: Loop through parks with .forEach() and console.log each one

showSection("Task 19: Loop through Parks (check console)");

parks.forEach(function (park) {
  const parkInfo =
    park.name + " (" + park.state + ") - Est. " + park.established;
  console.log(parkInfo);
});

// you are not supposed to see this in the index.html preview !!!!!!

// ---- Task 20: Filter the Parks Array ----
// Use .filter() twice:
//   1. Create freeParks - parks where entranceFee === 0
//   2. Create busyParks - parks where annualVisitors > 4000000
// Show both results as tables using showTable().

// TODO: Create freeParks using .filter()
const freeParks = parks.filter((park) => park.entranceFee === 0);
showTable("Task 20: Free parks", freeParks);

// TODO: Create busyParks using .filter()
const busyParks = parks.filter((park) => park.annualVisitors > 4000000);
showTable("Task 20: Busy parks (4M+ visitors)", busyParks);

// ---- Task 21: Map the Parks Array to Labels ----
// Use .map() to create a new array called parkLabels.
// Each item should be a string in the format:
//   "Yellowstone - Wyoming (1872)"
// Show the result using show().

// TODO: Create parkLabels using .map()

const parkLabels = parks.map(
  (park) => `${park.name} - ${park.state} (${park.established})`,
);

show("Task 21: Park labels from map()", parkLabels);

// ============================================================
// PART 4: OBJECT MANIPULATION
// ============================================================

showSection("Part 4: Object Manipulation");

// ---- Task 22: Copy an Object with Object.assign() ----
// Create a const variable called basePark with at least 4 properties.
// Use Object.assign() to create a copy called updatedPark.
//   Syntax: Object.assign({}, sourceObject)
// Change one property on updatedPark.
// Show both objects to confirm the original was not affected.

// TODO: Create basePark

const basePark = {
  name: "Yellowstone",
  state: "Wyoming",
  established: 1872,
  entranceFee: 35,
};

// TODO: Copy it into updatedPark using Object.assign({}, basePark)
const updatedPark = Object.assign({}, basePark);
updatedPark.state = "New York";

// TODO: Change one property on updatedPark

show("Task 22: Original basePark (unchanged)", basePark);
show("Task 22: updatedPark with changed property", updatedPark);

// ---- Task 23: Reference vs Value ----
// Part A: Primitive copy by value
//   Create a let variable called originalFee set to 35.
//   Assign it to a new let variable called saleFee.
//   Change saleFee to 0.
//   Show both - originalFee should still be 35.

let orginalFee = 35;
saleFee = orginalFee;
saleFee = 0;
show("Task 23 (A): Original Fee should be 35", orginalFee);

//
// Part B: Object copy by reference
//   Create a const called parkA with name and entranceFee properties.
//   Assign parkA to a new const called parkB (plain = assignment, no Object.assign).
//   Change entranceFee on parkB.
//   Show both - what do you notice about parkA?

const parkA = {
  name: "Gates of the Arctic",
  entranceFee: 11907,
};

const parkB = parkA;

parkA.entranceFee = 4;

show("Task 23 (B): Entrance Fee parkB", parkB.entranceFee);

//
// Part C: Object equality
//   Create park1 and park2 with identical properties but as separate objects.
//   Show park1 === park2 - what does it return and why?

// TODO: Part A - primitive copy demo

const park1 = {
  name: "Gates of the Arctic",
  entranceFee: 11907,
};

// TODO: Part B - object reference demo

const park2 = {
  name: "Gates of the Arctic",
  entranceFee: 11907,
};

// TODO: Part C - object equality demo

show("Task 23 (C): park1 === park2", park1 === park2);

// ---- Task 24: const with Objects and Arrays ----
// Part A: Create a const object called myFavoritePark with a name property.
//   Change the name property to something different.
//   Show that the change worked.
//
// Part B: Write the line that would try to reassign myFavoritePark to a new object.
//   Comment it out so the file still runs.
//   Add a comment explaining what error it would throw.
//
// Part C: Create a const array called parkList with two park names.
//   Push a third park name onto it using .push().
//   Show that the new item is there.

// TODO: Part A - mutating a const object

const myFavoritePark = {
  name: "Yosemite",
};

myFavoritePark.name = "Grand Canyon"; // changes the park name

show("Task 24 Part A: myFavoritePark after property change", myFavoritePark);

// TODO: Part B - commented-out reassignment with error explanation

//myFavoritePark = { name: "Zion" }; // TypeError?

// TODO: Part C - mutating a const array

const parkList = ["Yosemite", "Grand Canyon"]; // had to google this one, still not sure

parkList.push("Zion");

show("Task 24 Part C: parkList after .push()", parkList);
