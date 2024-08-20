// console.log(`this is nilesh kumar`);
// console.log("i liked briyani");


// window.alert(`this is  an alert`);
// window.alert("this is nilesh");


// this is comment

/*

this is multi- line comment

*/


// document.getElementById("myh1").textContent = "heey this is nilesh";

// document.getElementById("myP").textContent = "i like briyani.";



//---------------- varaiable in javascript------------------------


// let x  = 12;
//  x = 34;

//  console.log(x);

// let age = 25;
// console.log(age);
// console.log(`you are ${age} years old`);

// console.log(typeof age);





//-------how to accept the user input

// const username =window.prompt("Enter the username");

// console.log(username);



// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//    console.log(username);
// }

// document.getElementById("mysubmit").onclick = function(){
//     const  title = document.getElementById("mytext").value;
//     document.getElementById("myH1").textContent = `hello this is ${title}`
// }











// ---------****************** Type coversion of Data  types -------------*****


// let age = window.prompt("How old are you ?");
// age = Number(age);
// age += 2;

// console.log(age, typeof age);





// const- datatypes  - =  a varaibale that can't changed 


// const PI = 3.14519;


// let radius ;
// let circumference ;

// radius = prompt("Enter the value of the radius");
// radius = Number(radius);

// circumference = 2 * PI* radius;
// console.log(circumference);


// document.getElementById("mySubmit").onclick = function(){

//     radius = document.getElementById("mytext").value ;
//     radius = Number(radius);
//     circumference = 2 * PI* radius;

//     document.getElementById("myH3").textContent = `The circumference of the circle is :  ${circumference}`;

    
// }



//---------------*** COunter program ----------


// const decreasebtn = document.getElementById("decrease");

// const resetbtn = document.getElementById("reset");

// const increasebtn = document.getElementById("increase");


// const countLabel= document.getElementById("countlable");

// let count = 0;
// increasebtn.onclick = function(){
//     count = count + 1;

//     countLabel.textContent =count;

// }

// resetbtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

// decreasebtn.onclick = function(){
//     count -= 1;
//     countLabel.textContent = count;
// }


// let count = 0;

// document.getElementById("increase").onclick = function(){
//     count += 1;

//      document.getElementById("countlable").textContent = count;
// }



// document.getElementById("decrease").onclick = function(){
//     count -= 1;

//      document.getElementById("countlable").textContent = count;
// }


// document.getElementById("reset").onclick = function(){
//     count=0;

//      document.getElementById("countlable").textContent = count;
// }







/// ----------Random Number generator -------

// let randomNum  =Math.floor(  Math.random()* 6 )+ 1;
// console.log(randomNum);
// console.log(randomNum);


// const min = 50;
// const max = 100;

// const  number = Math.floor(Math.random() * (max -min) + min);
// console.log(number);
// console.log(number);
// console.log(number);console.log(number);




// const mybutton = document.getElementById("mybtn");
// const myLable = document.getElementById("mylable");

// const min = 1;
// const max = 6;


// mybutton.onclick= function(){
// let randomNumber = Math.floor(Math.random() * max) + min;

// myLable.textContent = randomNumber;

// }






//  -------------checked property :  that determines thte checked state of an html checkbox and radio button element


// const mycheckbox = document.getElementById("checkbox");

// const visabtn= document.getElementById("visabtn");

// const mastercard= document.getElementById("mastercard");

// const paytm = document.getElementById("paytm");

// const mysubmit= document.getElementById("mysubmit");


// const subresult = document.getElementById("subresult");

// const paymentresult = document.getElementById("paymentresult");

// mysubmit.onclick= function(){
//     if(mycheckbox.checked ) {
//         subresult.textContent = `you are subscribed`;
//     }else{
//         subresult.textContent = `you are not subscribed`;
//     }


//     if(visabtn.checked){
//         paymentresult.textContent = `you are paying with vissa`;
//     }
//     else if(mastercard.checked){
//         paymentresult.textContent = `you are paying with master card`
//     }
//     else if(paytam.checked){
//         paymentresult.textContent = `you are paying with paytm card`
//     }
//     else {
//         paymentresult.textContent = `you dont have anything pay with cash`;
//     }
//  }






//--------ternary operator : 

// let age = 21;

// let message = age >= 18 ? "you are an adult" :  "you are young";

// console.log(message);


// let time = 16;

// let greeting = time < 12 ? ` it is morning`: ` it is afternoon`;

// console.log(greeting);



// let isStudent = true;

// let message = isStudent ? ` you are student` : `you are not student`;
// console.log(message);


// let purchaseAmount = 123;

// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`your total is ${purchaseAmount- purchaseAmount* (discount/100)}`);






// -----------switch statment -------------
// let days = 4;
// let message;

// switch(days) {
//     case 1: 
//         message = "Today is Sunday";
//         break;
//     case 2: 
//         message = "Today is Monday";
//         break;
//     case 3: 
//         message = "Today is Tuesday";
//         break;
//     case 4: 
//         message = "Today is Wednesday";
//         break;
//     case 5:
//         message = "Today is Thursday";
//         break;
//     case 6: 
//         message = "Today is Friday";
//         break;
//     case 7:
//         message = "Today is Saturday";
//         break;
//     default:
//         message = "Please enter a valid day.";
// }

// console.log(message);



// method chaining :  callling one method after annoter is one continous line of code


// let username = window.prompt(`Enter the your username`);

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();


// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username =letter + extraChars;
// console.log(username);


// method chaining :



       
// username = username.charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);





/////------------- Temperature Convertor-----------


// const textbox = document.getElementById("textbox");
// const tofahrenheit = document.getElementById("tofahrenheit");
// const toCelsius = document.getElementById("toCelsius");

// const result = document.getElementById("result");
// let temp;


// function convert(){
//     if(tofahrenheit.checked){
//         temp = Number(textbox.value);
//         temp = temp *   9/5+32;
//         result.textContent=temp.toFixed(2) +   "°F";
        


//     }else if(toCelsius.checked){
//         temp = Number(textbox.value);
//         temp = (temp -32) * (5/9);
//         result.textContent=temp.toFixed(2) +   "°C";


//     }else{
//         result.textContent=`select the unit`;
//     }


// }


//-----------------SPread Opertor : allow the iteratable such as an array or string to be expanded into separate element




// let username = "nilesh kumar";
// let letters = [...username].join("- ");
// console.log(letters);




//----- Rest parameters : (...rest) allow a function work with a variab;e number of arguments by bundling them into an array.


// spread = expand an array into separate Element
// rest -- bundles separate elements into an array


// const food1 = "pizaa";
// const food2 = " mango";
// const food3 = " hotdog";
// const food4 = " burger";


// const food = [food1, food2, food3, food4];

// let result = [...food];

// console.log(result);



// const food1 = "pizza";
// const food2 = "mango";
// const food3 = "hotdog";
// const food4 = "burger";

// // Function to log the food items
// function result(...food) {
//     console.log(food);
// }

// // Call the function with food items
// result(food1, food2, food3, food4);




// ----------callback :::
    //  a function that are passes as agrument to another function .


    // function hello(callback){
    //     console.log("Helllo");
    //     callback();

    // }
    // function leave(callback){
    //     console.log("leave");
    //     callback();
    // }

    // function bye(){
    //     console.log("Bye");

    // }

    // hello(bye);
    // leave(bye);

    // function sum(callback, x, y) {
    //     let result = x + y;
    //     callback(result);
    // }
    
    // function displayResult(result) {
    //     console.log(result);
    // }
    
    // // Call the sum function with the correct order of arguments
    // sum(displayResult, 3, 4);
    


    //----------For each method;;


//     let numbers = [1,2,3,4,5];

//     // numbers.forEach(display);
//     // numbers.forEach(doubles);
//     numbers.forEach(triples);
//     // numbers.forEach(square);

    



// function display(element){
//     console.log(element);
// }

// function doubles(element, index, array){
//     array[index] = element *2;

// }
// function square(element, array, index){
//     array[index] = element* element;
// }

// function triples(element, array, index){
//     array[index] = element * 3;
// }

// console.log(numbers);



//------------------------------------- map : accepts a callback and aaplies that function to each elememt of an array, then return a new array; its doesnt change the value of the array it .






// const numbers = [1,3,4,5,6];


// // const squares = numbers.map(square);
// // console.log(squares);


// const cubes = numbers.map(square);
// console.log(cubes);



// function square(element){
//     return Math.pow(element,2);
// }


// function cube(element){
//     return Math.pow(element,3);
// }



// const students = ["Dinesh", "suresh", "tony","tom"];

// // const studentsUpper = students.map(upppercase);
// // console.log(studentsUpper)
// ;



// // function upppercase(element){
// //     return  element.toUpperCase();
// // }

// function lowercase(element){
//     return  element.toLowerCase();
// }


// const studentsLower = students.map(lowercase);
// console.log(studentsLower);

// // console.log(students)/



// const date = ["2024-01-10", "2033-10-23","2043-04-5"];

// const result = date.map(formatDates);
// console.log(result);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1] } / ${parts[2] }/${parts[0] }`;
// }




//--------------------filter() : creates a new array by filltering out elements.



let numbers = [1,3,4,5,6,7,9,8];

// let nums = numbers.filter(isEven);
// console.log(nums);


// let nums = numbers.filter(isOdd);
// console.log(nums);

// function isEven(element){
//     return element%2 ==0;
// }


// function isOdd(element){
//     return element%2 !=0;
// }


// const ages = [10,24,43,44,34,43,33,23,32];
// const adults = ages.filter(isAdult);
// console.log(adults);


// function isAdult(element){
//     return element>=18;
// }










// //---------reduce() : reduce the elements of an array to a single vlaue;

// const prices = [5,10,12,14,15,30];

// const total = prices.reduce(sum);


// console.log(total);


// function sum(accumulator, element){
//     return accumulator+ element;
// }



// const prices = [5, 10, 12, 14, 15, 30];

// function calculateSum(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     console.log(total);
// }

// calculateSum(prices);


const myHeading = document.getElementById("myH1");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign= "center";


// const fruit = document.getElementsByClassName("fruits");

// console.log(fruit);