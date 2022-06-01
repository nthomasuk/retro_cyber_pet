const inquirer = require("inquirer");
// const { Animal } = require("./animal")
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
            message: `What is your new pet's name?`,
        });
        if (typeOfPet === "cat") {
            userPet = new Cat(petName);
        } else if (typeOfPet === "dog") {
            userPet = new Dog(petName);
        } else {
            userPet = new Rabbit(petName);
        }

        activities();
    };
start();
} catch (error) {
    console.log("Danger Will Robinson!", error)
};

async function activities(){
    userPet.stats();

    if (!userPet.isAlive()) {
        gameOver();
        return;
    } else {
        userPet.growUp();
        const { choice } = await inquirer.prompt({
            type: "list",
            name: "activities",
            message:
            "So you got your new pet home, but are you responsible enough to keep it alive? Do you want to feed your pet? Play with your pet? Bathe your pet? Or put it to bed?",
            choices: [
                    {
                        key: "a",
                        name: "Feed your pet",
                        value: "feed",
                    },
                    {
                        key: "b",
                        name: "Play with your pet",
                        value: "play",
                    },
                    {
                        key: "c",
                        name: "Bathe your pet",
                        value: "bathe",
                    },
                    {
                        key: "d",
                        name: "Put pet to bed",
                        value: "sleep",
                    },
                    {
                        key: "e",
                        name: "Quit the game",
                        value: "quit",
                    }
                ],
            });
        
            if (choice === "feed") userPet.eats();
            if (choice === "play") userPet.play();
            if (choice === "bathe") userPet.bathe();
            if (choice === "sleep") userPet.sleep();
            if (choice === "quit") {
                const quitChoice = gameOver();
                if (quitChoice) {
                    gameOver();
                    return;
                };
            }
            
            
            // activities();
        }
        
        async function gameOver(){
            console.log("Maybe it's for the best")
        };
    };
    
