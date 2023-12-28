// //Write a program that prints all even numbers in an array
numbers = [5, 62, 49, 35, 27, 4, 42, 42, 28, 73, 3, 83, 34, 10, 50]

for (counter = 0; counter != numbers.length; counter++){
    if (numbers[counter] % 2 == 0){
        console.log(numbers[counter]);
    }
}


// //Write a program to print largest number in an array
let greatestNumber = 0;
for (counter = 0; counter < numbers.length; counter++){
    if (greatestNumber < numbers[counter]){
        greatestNumber = numbers[counter]
    }
}
console.log(`The greatest number in the given array is ${greatestNumber}`);


// //Write a program that prints all the male people's first name given a complex object
const people = [
    { firstName: "Alex", gender: "male" },
    { firstName: "Taylor", gender: "female" },
    { firstName: "Riley", gender: "female" },
    { firstName: "Parker", gender: "male" },
    { firstName: "Sam", gender: "male" },
    { firstName: "Jordan", gender: "male" },
    { firstName: "Shiloh", gender: "female" },
    { firstName: "Morgan", gender: "female" },
    { firstName: "Ryan", gender: "male" }
  ];

for (counter = 0; counter < people.length; counter++){
    if (people[counter]["gender"] == "male"){
        console.log(`The person with name ${people[counter]["firstName"]} is a male`);
    }
}
  
// //Write a program that reverses all elements of an array 
// let reversedList = [];
// for (indexCounter = -1; indexCounter != Number("-numbers.length"); indexCounter--){
//     console.log(numbers[indexCounter])
//     reversedList.append(numbers[indexCounter])
// }
// console.log(reversedList)

test = [1,43,5,34,53]
console.log(test[1])