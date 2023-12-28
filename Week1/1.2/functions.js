//Write a function that returns sum of two numbers 
function sumOfTwo(num1, num2){
    return num1 + num2
}

//Write another function that displays this result in a pretty format
function prettySum(functionName){
    return `The sum of the two numbers is: ${functionName()}`
}

console.log(sumOfTwo(3,4))
console.log(prettySum(sumOfTwo))