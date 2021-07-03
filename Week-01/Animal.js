class Animal {

    constructor(name,weight){
        this.name = name;
        this.weight = weight;
        if (this.constructor == Animal) {
            throw new Error("Animal class is an Abstract class. It cannot be created.");
        }
    }
;
    eat(){
        console.log(`${this.name} is eating.`);
    }

    sleep(){
        console.log(`${this.name} is sleeping.`);
    }

}

class Horse extends Animal {
    constructor(name,weight,height){
        super(name,weight);
        this.height = height;
    }

    run(){
        console.log("Horse is running.");
    }
}

let horse = new Horse("Champ",355,5.5);
horse.eat();
horse.run();