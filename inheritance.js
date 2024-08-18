class Animal{
    alive = true;

    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}


class Rabbit extends Animal{
    name = "rabbit";

}

const rabbit = new Animal();
rabbit.name = "raabit";

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();