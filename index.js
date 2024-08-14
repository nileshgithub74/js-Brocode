console.log(`this is nilesh kumar`);
console.log("i liked briyani");


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




const mybutton = document.getElementById("mybtn");
const myLable = document.getElementById("mylable");

const min = 1;
const max = 6;


mybutton.onclick= function(){
let randomNumber = Math.floor(Math.random() * max) + min;

myLable.textContent = randomNumber;

}

