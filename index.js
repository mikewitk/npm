var chalk = require("chalk");

var message = chalk.red("Hello") + chalk.yellow(" World");
console.log(message);
console.log(chalk.blue("Red"), chalk.red("Green"), chalk.green("Yellow"), chalk.yellow("Blue"));