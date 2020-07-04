// Week 4: Function execise
/*
Q. 1 Practice Writing Function with Parameters
Alter the favoriteColor function from earlier to pass in a parameter called myFavoriteColor
Call this function by passing an argument like "blue" or "green"
Stretch Goal: Create a function that takes in an array of favorite colors, and prints them all out
*/


//Q. 2
function sayHello(name) {
    return 'hello ' + name;
}

function shout(a, foo) {
    console.log(foo(a));
}

shout('world!', sayHello);
// console prints "hello world!"

// Rewrite the functions above to sayGoodbye instead, and test it in the node console.

