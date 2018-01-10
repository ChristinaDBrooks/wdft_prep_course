/*
Exercise #1
Create a variable named "numbers" and assign an empty array to it.
*/
var numbers = [];


/*
Exercise #2
Using the loop provided for you below, use the array push method to insert the numbers 1 to 10 into the array.
*/

for(var i=1; i<11; i++){
    //use the array push() method here.
    numbers.push (i);
}
var newNumbers = numbers.slice();

firstItem = newNumbers.shift();
lastItem = newNumbers.pop();

/*
Exercise #3
Test that you used the array push method correctly by console logging the first item in the array. Console log the last item in the array afterwards.
*/
console.log (numbers);
console.log ("First item if the array is ",firstItem);
console.log ("Last item of the array is ", lastItem);
console.log (newNumbers);

/*
Exercise #5
Create an empty object and assign it to the variable car below.
Give the car object a property called "colour" and assign it the value of "black". Test that your code works correctly by outputting the "colour" property to the console. You should see the value "black" printed out.
*/
var car = {
    colour : 'black'
}
console.log ("Colour of car is ", car.colour);


