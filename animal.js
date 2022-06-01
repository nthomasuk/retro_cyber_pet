class Animal {
    constructor(name) {
        this.name = name;
        this.startingAge = 0;
        this.age = this.startingAge;
        this.health = 100;
        this.happiness = 100;
        this.stamina = 100;
        this.hunger = 0;
        this.cleanliness = 100;
    };

    isAlive() {
        return this.health > 0 && this.hunger < 100 && this.stamina > 0;
    };

    growUp() {
        if (!this.isAlive()) {
            console.log("You're pet is dead. You really should not get the real thing!")
        } else {
            this.age++;
            this.hunger += 10;
            this.stamina -= 10;
            this.happiness -= 10;
            this.health -= 10;
        }
    };

    eats() {
        this.health += 50;
        this.hunger -= 50;
    };
    
    bathe() {
        this.happiness += 25;
        this.cleanliness += 50;
        this.stamina += 20;
        this.hunger += 25;

        console.log(`${this.name} has had a glorious bath! they now have ${this.happiness} happiness,
        ${this.cleanliness} cleanliness, ${this.stamina} stamina, but they now have ${this.hunger} hunger.`);
        
    };

    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            stamina: this.stamina,
            hunger: this.hunger,
            happiness: this.happiness,
            cleanliness: this.cleanliness,
        });
    };
};


module.exports = { Animal };
