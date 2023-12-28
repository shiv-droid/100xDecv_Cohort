//Create a counter in JavaScript(counts down from 30  to 0)
// for (counter =  30; counter != -1; counter--){
//     console.log(counter)
// }

//Calculate the time it takes between a setTimeout call and the inner function actually running
function testTIme(){
    console.log("This is a test function")
}
console.time("test_setTimeout")
setTimeout(testTIme , 1000)
console.timeEnd("test_setTimeout")

//Create a terminal clock(HH:MM:SS)
con
console.log()