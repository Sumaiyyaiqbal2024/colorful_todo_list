#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Welcome to code with Sumaiyya - Todo List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log("Your updated Todo-List:" , todoList);