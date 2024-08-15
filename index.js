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

