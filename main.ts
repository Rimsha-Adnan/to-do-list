#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.red(
    "\n\t\t>>>>>>>/==============================================/<<<<<<<<"
  )
);
console.log(
  chalk.bold.italic.magenta(
    `\t\t    WELCOME TO CODE WITH RIMSHA TODO LIST APPLICATION     `
  )
);
console.log(
  chalk.red(
    "\t\t>>>>>>>/==============================================/<<<<<<<<<\n\t\t"
  )
);

let todos: string[] = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "add",
      type: "input",
      message: chalk.bold.cyan("What Would You Like To Add In Your Todos?"),
    },
  ]);
if (!addTask.add){
    console.log(chalk.bold.redBright(`\tNothing Add In Your Todo List`));
    condition = addTask.add
} else {
        todos.push(addTask.add);
        console.log(
        chalk.italic.cyanBright(addTask.add, "\tIs Added In Todo List Successfully")
        );

        let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: chalk.bold.green("Do You want To AddMore Task In Your Todos?"),
            default: false,
        },
        ]);
        if ((condition = addMoreTask.addMore)) {
        addTask.add;
        } else {
            console.log(chalk.italic.yellow("\t Your List Is Ready  "));
            todos.forEach((todo, index) => console.log(chalk.bold.green(index + 1, todo)));

            let confirmAns = await inquirer.prompt([
                {
                name: "confirmation",
                type: "confirm",
                message:chalk.bold.blue( "Do You Want To Change Your Todos?"),
                default: false,
                },
            ]);
            if ((condition = confirmAns.confirmation)) {
                let answer = await inquirer.prompt([
                {
                    name: "operation",
                    type: "list",
                    message: chalk.bold.rgb(789, 90, 351)("Select Any One Operation:"),
                    choices: ["add", "update", "veiw", "delete"],
                },
                ]);

                if (answer.operation == "add") {
                addTask.add;
                }
                if (answer.operation == "update") {
                let updateTodo = await inquirer.prompt([
                    {
                    name: "todo",
                    type: "list",
                    message:chalk.bold.rgb(32,890,76)( "what would  You Like To Update In Your Todos? "),
                    choices: todos.map((answer) => answer),
                    },
                ]);
                let change = await inquirer.prompt([
                    {
                    name: "changes",
                    type: "input",
                    message:chalk.bold.blueBright( "Add Updation :"),
                    },
                ]);
                let newtodo: any = todos.filter((val) => val !== updateTodo.todo);
                todos = [change.changes, ...newtodo];
                console.log(chalk.bold.italic.yellow("\t Your List Is Ready  "));
                todos.forEach((todo, index) => console.log(chalk.bold.green(index + 1, todo)));
                break;
                }
                if (answer.operation == "veiw") {
                console.log(todos);
                }
                if (answer.operation == "delete") {
                 let deleteTodo = await inquirer.prompt([
                    {
                    name: "delete",
                    type: "list",
                    message:chalk.bold.whiteBright( "What Would  You Like To Delete In Your Todos? "),
                    choices: todos.map((answer) => answer),
                    },
                 ]);
                 let deleteAns = await inquirer.prompt([
                    {
                    name: "remove",
                    type: "input",
                    message:chalk.bold.gray.cyan( "Delete Item :"),
                    },
                 ]);
                 let newtodo: any = todos.filter((val) => val !== deleteAns.remove);
                 todos = [...newtodo];
                 console.log(chalk.italic.bold.yellow("\t Your List Is Ready  "));
                 todos.forEach((todo, index) => console.log(chalk.bold.green(index + 1, todo)));
                 break;
                }
            }else {
                console.log(chalk.bold.italic.rgb(678,245,174)("\tOK.....THAT'S GREAT\n\tIF YO DON'T WANT TO CHANGE IT\t"));
              }       
        }       
    }
} 
console.log(chalk.bold.italic.rgb(106,864,332)("\n\t\tTHANKYOU FOR USING MY ADVANCE TODO LIST APPLICATION\n"));
