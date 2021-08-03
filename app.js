function main() {
    // main() function we will call each of our solutions each in their own function

    // Exercise 1 
    console.log("exercise 1");
    console.log("exercise 2");
}


//pseudocode
// Create an array
const array = ["THIS SHOULD ALL BE LOWERCASE"];
const lowercased = array.map(array => array.toLowerCase());
console.log(lowercased);
//Expected output: "this should all be lowercase" 

// More pseudocode
// Create an array
const word = ["hi", "hello", "yo",];
const uppercase = word.map(word => word.toUpperCase());
console.log(uppercase);
//Expected output: "HI, HELLO, YO"

// EVEN MORE pseudocode
// will come back to number 3


//pesudocode
//create an array
const remove = [2, 4, 6, 8,];
console.log(remove);
const index = remove.indexOf(4);
if (index > -1);
{
    remove.splice(index, 1); // The splice() method adds and/or removes array elements.
}
console.log(remove);

