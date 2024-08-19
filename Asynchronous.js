//  synchronous :  Executes line by line consecutively in a sqential manner Code that waits for an operation to complete



// Asynchronous :  ALlows Multiple operation to be performed concurrently without waiting doesnt block the execution flow and allows the program to continue (I/O operation,network requests, fetching data, Handled with : CallBack(), Promises, Async/ Await);



// setTimeout(()=> console.log("Task1"), 3000);

// console.log("Task2");
// console.log("Task3");
// console.log("Task4");




function func1(CallBack){
    
setTimeout(()=> {
    console.log("Task1");
    CallBack();
}, 3000);


}

function func2(){
    
console.log("Task2");
console.log("Task3");
console.log("Task4");

}


func1(func2);