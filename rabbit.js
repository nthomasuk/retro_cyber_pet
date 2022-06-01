// const {builtinModules} = require("module");

class Animal {
    constructor(name) {
        this.name = name;
        this.startingAge;
        this.health = 100;
        this.happiness = 100;
        this.stamina = 100;
        this.hunger = 0;
        this.cleanliness = 100;
    }

    get isAlive() {
        return this.health > 0 && this.hunger < 50;
    }

    growUp() {
        if (!this.isAlive) {
            console.log("You're pet is dead. You really should not get the real thing!")
        }

        this.age++;
        this.hunger += 10;
        this.stamina -= 10;
        this.happiness -= 10;
        this.health -= 10;
    }

    eats() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} has eaten and their health is now ${this.health}`);
        return this;
    }

    bathes() {
        this.happiness += 25;
        this.cleanliness += 50;
        this.stamina += 20;
        this.hunger += 25;
        console.log(`${this.name} has had a glorious bath! they now have ${this.happiness} happiness,
        {this.cleanliness} cleanliness, ${this.stamina} stamina, but they now have ${this.hunger} hunger.`);
        return this;
    }
    
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            stamina: this.stamina,
            hunger: this.hunger,
            happiness: this.happiness,
        });
    }
}

class Rabbit extends Animal {
    constructor(name, content) {
        super(name, content);
        this.content = content
    }
    
    rearrangeToys() {
        this.happiness += 50;
        this.cleanliness -= 30;
        this.stamina -= 50;
        this.hunger += 15;
        console.log(`${this.name} rearranged their toys and had a great time! 
        They now have ${this.happiness} happiness, 
        but they're tired and in need of a clean with ${this.cleanliness} cleanliness
        and a sleep with ${this.stamina} stamina!`)
        return this;
    }

    runningFromDogs() {
        this.health += 50;
        this.cleanliness -= 50;
        this.stamina += 50;
        this.hunger += 15;
        console.log(`${this.name} dreams of being chased and outwitting a dog, they now have ${this.health} but this much ${this.cleanliness}`);
        return this;
    }
}

module.exports = { Rabbit };

