// Object : collection of related properties and method


const person={
    firstName : "Nilesh",
    lastName : "Kumar",
    age : 21,
    isStudent : true, 

    // sayHello : function(){
    //     console.log("heyy, this is nilesh kumar");
    // }

    sayHello : ()=>{
        console.log("heyy, this is nilesh kumar");

    }
    
}

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
person.sayHello();


