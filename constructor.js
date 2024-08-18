// constructor : special method for defining  the properties and methods of objects;

function Cars(make,model,year , color){
    this.make = make ,
    this.model = model, this.year= year,
    this.color = color,

    this.drive = function(){
        console.log(` you can drive the ${this.model}`);
    }


}

const car1 = new Cars("ford","tesla", "2023","white");


const car2 = new Cars("chevrolete","mustand", "2023","red");
// car1.make = "ford";
// car1.model = "tesla";
// car1.year = "2012";
// car1.color ="white";

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
