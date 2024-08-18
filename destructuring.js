// destructuring : extract the values from arrays and object, then assign to the variable in a convenint ways


// [] = to perform array destructuring
// {} = to perfom object destructuring



//**************swap tow element */
// let a = 1;
// let b = 2;

// [a,b] =[b,a];

// console.log(a);
// console.log(b);


//**************swap 2 element in the array  */


// const colors = ["red","brown", "blue","yelow"];

// [colors[0], colors[3]] = [colors[3], colors[0]]

// console.log(colors);




// const colors = ["red","brown", "blue","yelow"];
// const [firstcolor, secondColor, thirdColor] = colors;


// console.log(firstcolor);
// console.log(secondColor);



// extracting the values from the Object

const person1={
    firstname : "nilesh",
    lastName : "kumar",
    age : 30,
    job : 'student'
}

const person2={
    firstname : "nile",
    lastName : "kumar",
    age : 30,
    
}



const {firstname,lastName,age,job} = person2;
console.log(firstname);
console.log(lastName);
console.log(age);



/// desturcturing in function parameters

function displayPerson({firstname,lastName,age,job}){
    console.log(`${firstname}, ${lastName}`);

    console.log(age);
    console.log(job);

}

displayPerson(person2);
