const { Animal } = require("./animal");

class Rabbit extends Animal {
    constructor(name, content) {
        super(name, content);
        this.content = content
    }
    
    plays() {
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

    sleeps() {
        this.health += 50;
        this.cleanliness -= 50;
        this.stamina += 50;
        this.hunger += 15;
        console.log(`${this.name} dreams of being chased and outwitting a dog, they now have ${this.health} but this much ${this.cleanliness}`);
        return this;
    }
}

module.exports = { Rabbit };

