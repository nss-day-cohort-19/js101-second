console.log("hello main.js");

var myNum = 2.546789494;
var shortNum = myNum.toFixed(2);
console.log("shorNum", shortNum);

var skyIsBlue = true;
if (!skyIsBlue){
	console.log("Yes the sky is blue");
}else {
	console.log("Hmmm what color is the sky");
}


// Write a loop that starts at 100 and decrements a variable by 1. 
// If the number is even, add the number to the beginning of an array, 
// else add it to the end of the array.

var evenOdds = [];
for (var i = 100; i >= 0; i--){	
	if(i % 4 === 0){
		evenOdds.unshift(i);
	} 
	// 
}
console.log(evenOdds);

if( value < 1 ) {
  console.log("Small number");
} else if( value < 5 ) {
  console.log("Medium number");
} else if( value < 15 ) {
  console.log("Large number");
} else {
  console.log("Dunno");
}

// with a switch
var value = 10;
switch (true) {
  case value < 1:
    console.log("Small number");
    break;
  case value < 5:
    console.log("Medium number");
    break;
  case value < 15:
    console.log("Large number");
    break; //without break it will log "Dunno" also
  default:
    console.log("Dunno");
}



function subtract (one, two){
	return one - two;
}

function add (one, two){
	return one + two;
}

function performAction(numberOne, numberTwo, donut){
	var meDone = donut(numberOne, numberTwo);
	return meDone;
}

var addValues = performAction(1, 2, add);
console.log("addValues", addValues);

var subtractValues = performAction(3, 1, subtract);
console.log("subtractValues", subtractValues);


var jediText = "";
var jedi = ["Skywalker", "Yoda", "Obi-wan", "Qui-Gon", "Windu"];


for (var i = 0; i < jedi.length; i++){
	// jediText += jedi[i] + " is a <strong>Jedi</strong>. <br>";
	jediText += `${jedi[i]} is a <strong>Jedi</strong><br>`;
}

document.getElementById("demo").innerHTML = jediText;

var myDog = {name: "Esme", breed: "Twist", age: 6};
myDog.gender = "Female";

for (prop in myDog){
	console.log(prop, myDog[prop]);
}


var ourDogs =[];
ourDogs.push({owner: "Brenda", name: "Esme", breed: "Twist", age:6});
ourDogs.push({owner: "Tamela", name: "Big Papa", breed: "Pitbull", age:12});


console.log("ourDogs", ourDogs);

ourDogs.forEach(function(donut){
	console.log("name", donut.name, donut.age);
});


