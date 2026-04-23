/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);
/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);
/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";

//travelDate = "2026-04-15"
/*
 * Observations:
 * TODO: Explain here.
 * trying to assing new value to constant travelDate raise uncaught error :assign to constant variable
 * what happen is that constant can't reassigned  doing so violate constant rule and raise exception
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);

var timeMachineModel = "T-800";


/*
 * Observations:
 * TODO: Explain here.
 * variable value print as undefine no error raised 
 * this call Hoisting when we can access and element Before its declaration 
 * this happened because javascript interpreter move declaraion of var,function and class to the top 
 */
