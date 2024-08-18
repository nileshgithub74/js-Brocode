// static Keyword : we can acces the method and properties of the class withhout creating the object



class Test{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2* this.PI* radius;
    }
}

console.log(Test.PI);
console.log(Test.getDiameter(3));
console.log(Test.getCircumference(3));

