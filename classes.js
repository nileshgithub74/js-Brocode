// class  Product{
//     constructor(names,price){
//         this.names = names;
//         this.price =price;
//     }

//     displayProduct(){
//         console.log(`product : ${this.names}`);
//         console.log(`price : ${this.price}`);
//     }
// }

// const pro1 = new Product("Shirt",199);
// pro1.displayProduct();


// class SmartPhone{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     display(){
//         console.log(`the price of Iphone is ${this.price}`);
//     }
// }

// const sb = new SmartPhone("Iphone");
// console.log(sb.name);
// sb.display();




class SmartPhone{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    display(){
        console.log(`the price of Iphone is ${this.price}`);
    }
}


class series extends SmartPhone{
    constructor(model,name,price){
        super(name,price);
        this.model = model;
    }
    display(){
        console.log(`Model Name : ${this.model}`);
    }

}

const model = new series("15 pro");
model.display();