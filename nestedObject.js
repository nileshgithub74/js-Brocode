// const person={
//     fullName : "Nilesh kumar",
//     age : 21,
//     isStudent : true,

//     address :{
//         street : "phagwara",
//         city : "jalandhar",
//         country : " Punjab",
//     }
// }

// console.log(person.address.street);





// // class Person{
// //     constructor(name, age, ...address){
// //         this.name = name;
// //         this.age = age;
// //         this.address = new Adress(...address);

// //     }
// // }

class Adress{
    constructor(street, country,city){
        this.country = country;
        this.street = street;
        this.city = city;
    }
}