// Exercise #1
// Write your solution below

var myOutput;
myOutput = [];
var i;
for (var i = 0; i < 7; i++){
    myOutput.push("#");
    console.log(myOutput);
}

/* 
Write your explanation for Exercise #1 here
I created an empty array called myOutput. Then I use a for loop to push "#" into myOutput array.
Then I console.log the array myOutput.
*/



// Exercise #2
// Write your solution below

function isEven(number){
    if (number % 2 != 0){
        console.log ('The number is odd');
    } else {
        console.log ('The number is even');
        }
}
var number = 10;
isEven(number);
/* 
Write your explanation for Exercise #2 here
I wrote a named function called isEven, then test the variable number using to output whether number is odd or even.
I used the modulo as odd-even test.
*/
