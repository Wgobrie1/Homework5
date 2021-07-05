// putting moment in a variable
var today = moment();

// putting the current date in a variable
var currentDay = moment().format("dddd, MMMM " + "Do, YYYY " + "-- HH:mm a");
var currentHour = moment().format("HH");

// setting the date
function insertCurrentDay() {
    $("#moment").text(currentDay);
}


// This allows the Text areas to display the pre-stored localStorage data (which are saved later on in the js) upon refresh

document.getElementById("inputNine").innerHTML = localStorage.getItem("setNine");
document.getElementById("inputTen").innerHTML = localStorage.getItem("setTen");
document.getElementById("inputEleven").innerHTML = localStorage.getItem("setEleven");
document.getElementById("inputTwelve").innerHTML = localStorage.getItem("setTwelve");
document.getElementById("inputOne").innerHTML = localStorage.getItem("setOne");
document.getElementById("inputTwo").innerHTML = localStorage.getItem("setTwo");
document.getElementById("inputThree").innerHTML = localStorage.getItem("setThree");
document.getElementById("inputFour").innerHTML = localStorage.getItem("setFour");
document.getElementById("inputFive").innerHTML = localStorage.getItem("setFive");

//

insertCurrentDay();

// setting up local storage

function textNine(){
	localStorage.setItem("setNine", document.getElementById("inputNine").value);
	document.getElementById("inputNine").innerHTML = localStorage.getItem("setNine");
 }
function textTen(){
	localStorage.setItem("setTen", document.getElementById("inputTen").value);
	document.getElementById("inputTen").innerHTML = localStorage.getItem("setTen");
}
function textEleven(){
	localStorage.setItem("setEleven", document.getElementById("inputEleven").value);
	document.getElementById("inputEleven").innerHTML = localStorage.getItem("setEleven");
}
function textTwelve(){
	localStorage.setItem("setTwelve", document.getElementById("inputTwelve").value);
	document.getElementById("inputTwelve").innerHTML = localStorage.getItem("setTwelve");
}
function textOne(){
	localStorage.setItem("setOne", document.getElementById("inputOne").value);
	document.getElementById("inputOne").innerHTML = localStorage.getItem("setOne");
}
function textTwo(){
	localStorage.setItem("setTwo", document.getElementById("inputTwo").value);
	document.getElementById("inputTwo").innerHTML = localStorage.getItem("setTwo");
}
function textThree(){
	localStorage.setItem("setThree", document.getElementById("inputThree").value);
	document.getElementById("inputThree").innerHTML = localStorage.getItem("setThree");
}
function textFour(){
	localStorage.setItem("setFour", document.getElementById("inputFour").value);
	document.getElementById("inputFour").innerHTML = localStorage.getItem("setFour");
}
function textFive(){
	localStorage.setItem("setFive", document.getElementById("inputFive").value);
	document.getElementById("inputFive").innerHTML = localStorage.getItem("setFive");
}

//  allow the border colours of the cards to change depending on the time, grey for the past, red for currrent, green for future.
// This is done by using the currentHour var, set earlier, and comparing it to the number value (representative of each hour), then changing the colours from there.
// While this code can be reduced a small amount, by removing the third "if" from each "else if", I decided to not do this.

if (currentHour > 9 ) {
	document.getElementById("nineAM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 9) {
	document.getElementById("nineAM").style.backgroundColor = "red";
}
else if (currentHour < 9) {
	document.getElementById("nineAM").style.backgroundColor = "green";
}
if (currentHour > 10 ) {
	document.getElementById("tenAM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 10) {
	document.getElementById("tenAM").style.backgroundColor = "red";
}
else if (currentHour < 10) {
	document.getElementById("tenAM").style.backgroundColor = "green";
}
if (currentHour > 11 ) {
	document.getElementById("elevenAM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 11) {
	document.getElementById("elevenAM").style.backgroundColor = "red";
}
else if (currentHour < 11) {
	document.getElementById("elevenAM").style.backgroundColor = "green";
}
if (currentHour > 12 ) {
	document.getElementById("twelvePM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 12) {
	document.getElementById("twelvePM").style.backgroundColor = "red";
}
else if (currentHour < 12) {
	document.getElementById("twelvePM").style.backgroundColor = "green";
}
if (currentHour > 13 ) {
	document.getElementById("onePM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 13) {
	document.getElementById("onePM").style.backgroundColor = "red";
}
else if (currentHour < 13) {
	document.getElementById("onePM").style.backgroundColor = "green";
}
if (currentHour > 14 ) {
	document.getElementById("twoPM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 14) {
	document.getElementById("twoPM").style.backgroundColor = "red";
}
else if (currentHour < 14) {
	document.getElementById("twoPM").style.backgroundColor = "green";
}
if (currentHour > 15 ) {
	document.getElementById("threePM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 15) {
	document.getElementById("threePM").style.backgroundColor = "red";
}
else if (currentHour < 15) {
	document.getElementById("threePM").style.backgroundColor = "green";
}
if (currentHour > 16 ) {
	document.getElementById("fourPM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 16) {
	document.getElementById("fourPM").style.backgroundColor = "red";
}
else if (currentHour < 16) {
	document.getElementById("fourPM").style.backgroundColor = "green";
}
if (currentHour > 17 ) {
	document.getElementById("fivePM").style.backgroundColor = "lightgrey";
}
else if (currentHour == 17) {
	document.getElementById("fivePM").style.backgroundColor = "red";
}
else if (currentHour < 17) {
	document.getElementById("fivePM").style.backgroundColor = "green";
}
