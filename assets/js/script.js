// use #currentDay to display current day and date

var currentDate = Date();
$("#currentDay").html(currentDate);

// Selecting parent div which returns an array of children
var nineAm = document.querySelector("#nineam");
// Selecting the 2nd item of the array which is the BUTTON in HTML
var nineAmButton = nineAm.children[2];
// Selecting the 1st item of the array which is the TEXTAREA in HTML
var nineAmInput = nineAm.children[1];

// Adding eventListener to my button to save the value of the textarea to localStorage
nineAmButton.addEventListener("click", function(){
  localStorage.setItem("9AM", nineAmInput.value);
});

// Taking the localStorage value for 9AM and displaying it in the 9AM textvalue
nineAmInput.value = localStorage.getItem("9AM");

// 10AM

var tenAm = document.querySelector("#tenam");
var tenAmButton = tenAm.children[2];
var tenAmInput = tenAm.children[1];

tenAmButton.addEventListener("click", function(){
    localStorage.setItem("10AM", tenAmInput.value);
});

tenAmInput.value = localStorage.getItem("10AM");

// 11AM

var elevenAm = document.querySelector("#elevenam");
var elevenAmButton = elevenAm.children[2];
var elevenAmInput = elevenAm.children[1];

elevenAmButton.addEventListener("click", function(){
    localStorage.setItem("11AM", elevenAmInput.value);
});

elevenAmInput.value = localStorage.getItem("11AM");

// 12PM

var twelvePm = document.querySelector("#twelvepm");
var twelvePmButton = twelvePm.children[2];
var twelvePmInput = twelvePm.children[1];

twelvePmButton.addEventListener("click", function(){
    localStorage.setItem("12PM", twelvePmInput.value);
});

twelvePmInput.value = localStorage.getItem("12PM");

// 1PM

var onePm = document.querySelector("#onepm");
var onePmButton = onePm.children[2];
var onePmInput = onePm.children[1];

onePmButton.addEventListener("click", function(){
    localStorage.setItem("1PM", onePmInput.value);
});

onePmInput.value = localStorage.getItem("1PM");

// 2PM

var twoPm = document.querySelector("#twopm");
var twoPmButton = twoPm.children[2];
var twoPmInput = twoPm.children[1];

twoPmButton.addEventListener("click", function(){
    localStorage.setItem("2PM", twoPmInput.value);
});

twoPmInput.value = localStorage.getItem("2PM");

// 3PM

var threePm = document.querySelector("#threepm");
var threePmButton = threePm.children[2];
var threePmInput = threePm.children[1];

threePmButton.addEventListener("click", function(){
    localStorage.setItem("3PM", threePmInput.value);
});

threePmInput.value = localStorage.getItem("3PM");

// 4PM

var fourPm = document.querySelector("#fourpm");
var fourPmButton = fourPm.children[2];
var fourPmInput = fourPm.children[1];

fourPmButton.addEventListener("click", function(){
    localStorage.setItem("4PM", fourPmInput.value);
});

fourPmInput.value = localStorage.getItem("4PM");

// 5PM

var fivePm = document.querySelector("#fivepm");
var fivePmButton = fivePm.children[2];
var fivePmInput = fivePm.children[1];

fivePmButton.addEventListener("click", function(){
    localStorage.setItem("5PM", fivePmInput.value);
});

fivePmInput.value = localStorage.getItem("5PM");

// 6PM

var sixPm = document.querySelector("#sixpm");
var sixPmButton = sixPm.children[2];
var sixPmInput = sixPm.children[1];

sixPmButton.addEventListener("click", function(){
    localStorage.setItem("6PM", sixPmInput.value);
});

sixPmInput.value = localStorage.getItem("6PM");

// depending on the time of day, use .addClass (classes in CSS) to color code