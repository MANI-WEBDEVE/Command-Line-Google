import  chalk  from "chalk";   
// Example usage
console.log(chalk.bold.red("This is bold and red text!"));
console.log(chalk.bold.green("This is bold and green text!"));
console.log(chalk.bold.blue("This is bold and blue text!"));
console.log(chalk.bold.yellow("This is bold and yellow text!"));
console.log(
  chalk.bold.green.bgGray("This is bold, red text on a white background!")
);
// const chalk = require("chalk");

// const chalk = require('chalk');
function printLargeText(text = "MANI", color = "white", size = "large") {
  let formattedText = "";
  switch (size) {
    case "large":
      formattedText = `
// ${chalk[color].bold.green(".--------------------------------.")}
// ${chalk[color].bold.red("|  ____                   _      |")}
// ${chalk[color].bold("| / ___| ___   ___   __ _| | ___ |")}
// ${chalk[color].bold.yellow("|| |  _ / _ \\ / _ \\ / _` | |/ _ \\|")}
// ${chalk[color].bold.red("||| |_| | (_) | (_) | (_| | |  __/|")}
// ${chalk[color].bold.green("| \\____|\\___/ \\___/ \\__, |_|\\___|||")}
// ${chalk[color].bold.yellow("|                   |___/        |")}
// ${chalk[color].bold.red("'--------------------------------'")}
// `;
      break;
    case "medium":
      // Add medium font size ASCII art or Unicode characters here
      break;
    case "small":
      // Add small font size ASCII art or Unicode characters here
      break;
    default:
      break;
  }
  console.log(formattedText);
}

// Example usage
printLargeText();
