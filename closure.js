// Closure : A function defined inside of another function ,  the inner function has access to the varaibale and scope of the outer function . 

//  Alllow for private variables and state maintence used frequently in js framework : React, Vue, Anguluar/








// function Outer(){

//     let message = "hello world";


//     function Inner(){
//         console.log(message);

//     }

//     Inner();
// }




// Outer();

function createCounter(){
    let count =0;

    

function increasement(){
   
     count++;
     console.log(`count increased to ${count}`);
}

increasement();
increasement();
}
createCounter();f