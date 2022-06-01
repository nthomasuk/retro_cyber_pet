const inquirer = require("inquirer");
const { Cat } = require("./cat")
const { Dog } = require("./dog")
const { Rabbit } = require("./rabbit")


let userPet = "";

try {
    const start = async () => {
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message:
                "Which pet would you like to take home?",
                choices: [
                    {
                        key: "a",
                        name: "Cat",
                        value: "cat",
                    },
                    {
                        key: "b",
                        name: "Dog",
                        value: "dog",
                    },
                    {
                        key: "c",
                        name: "Rabbit",
                        value: "rabbit",
                    }
                ],
        });
        const petName = await inquirer.prompt({
            type: "input",
            name: "petName",
            message: "What is your new pet's name?",
        });
        if (typeOfPet === "cat") {
            userPet = new Cat(petName);
        } else if (typeOfPet === "dog") {
            userPet = new Dog(petName);
        } else {
            userPet = new Rabbit(petName);
        }
    };
start();
} catch (error) {
    console.log("Danger Will Robinson!", error)
};

try {
    const game = async () => {
        stats()
        const activities = await inquirer.prompt({
        type: "list",
        name: "activities",
        message:
            "So you got your new pet home, but are you responsible enough to keep it alive? Do you want to feed your pet? Play with your pet? Bathe your pet? Or put it to bed?",
            choices: [
                {
                    key: "a",
                    name: "Feed",
                    value: "feed",
                },
                {
                    key: "b",
                    name: "Play",
                    value: "play",
                },
                {
                    key: "c",
                    name: "Bathe",
                    value: "bathe",
                },
                {
                    key: "d",
                    name: "Bed",
                    value: "bed",
                }
            ],
    });
    if (!this.isAlive) {
        console.log("You're pet is dead. You really should not get the real thing!")
    }
    if (activities === "sleep" && typeOfPet === "cat"){
        catnap();
        stats();
    } else if (activities === "sleep" && typeOfPet === "dog"){
        chasingRabbits();
        stats();
    } else if (activities === "sleep" && typeOfPet === "rabbit"){
        runningFromDogs();
        stats();
    } else if (activities === "play" && typeOfPet === "cat"){
        playsBallWool();
        stats();
    } else if (activities === "play" && typeOfPet === "dog"){
        playsFetch();
        stats();
    } else if (activities === "play" && typeOfPet === "rabbit"){
        rearrangesToys();
        stats();
    }
    game();
};
} catch (error) {
    console.log("Danger Will Robinson!", error)
};

