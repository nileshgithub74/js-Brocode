
const person ={
    names : "nilesh",
    favfood : "chicken",
    Greet : function() {console.log(`hey this is ${this.names} and favourite food is ${this.favfood}` )},
};





const person1 ={
    names : "tom",
    favfood : "chicken",
    Greet : function() {console.log(`hey this is ${person1.names} and favourite food is ${this.favfood}` )},
};

 person1.Greet();



 //Note : this keyword  doesnot work with arrow function .
 

 