class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}

class Rabbit extends Animal{


    constructor(name,age, runSpeed){
        super(name,age);
      
        this.runSpeed = runSpeed;

    }

    run(){
        console.log(`this ${this.name} can run`);
    }

}

class Fish extends Animal{
    constructor(name,age, swinSpeed){
        super(name,age);
        this.swinSpeed = swinSpeed;

    }

}

const rabbit = new Rabbit("tom",1 ,23);
const fish = new Fish("Fish", 2 ,3);

console.log(rabbit.name);
console.log(rabbit.age);
rabbit.run();