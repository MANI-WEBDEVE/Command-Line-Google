import inquirer from 'inquirer';
import open from 'open';
import fs from 'fs';
import chalk from "chalk";

async function askQuestions() {
    let repeat = true;

    while (repeat) {
        let { question } = await inquirer.prompt([
            {
                name: 'question',
                type: 'list',
                message: chalk.bold.rgb(142, 201, 14)('What would you like to do ?\n'),
                choices: [chalk.bold.yellow('Search Site'), chalk.bold.yellow('Check Time'), chalk.bold.yellow('File Creator'), chalk.bold.red('Exit')]
            }
        ]);

        if (question === chalk.bold.yellow('Search Site')) {
            await openURL();
        } else if (question === chalk.bold.yellow('Check Time')) {
            checkTime();
        } else if (question === chalk.bold.yellow('File Creator')) {
            await fileCreator();
        } else if (question === chalk.bold.red('Exit')) {
            repeat = false;
        }
    }
}

async function promptForURL() {


    function printLargeText(text: string = "MANI", color: string = "white", size: string = "large"): void {
        let formattedText = "";
        switch (size) {
            case "large":
                formattedText = `
    ${chalk[color].bold.green(".--------------------------------.")}
    ${chalk[color].bold.red("|  ____                   _      |")}
    ${chalk[color].bold("| / ___| ___   ___   __ _| | ___ |")}
    ${chalk[color].bold.yellow("|| |  _ / _ \\ / _ \\ / _` | |/ _ \\|")}
    ${chalk[color].bold.red("||| |_| | (_) | (_) | (_| | |  __/|")}
    ${chalk[color].bold.green("| \\____|\\___/ \\___/ \\__, |_|\\___|||")}
    ${chalk[color].bold.yellow("|                   |___/        |")}
    ${chalk[color].bold.red("'--------------------------------'")}
`;
        }
        console.log(formattedText);
    }

    // Example usage
    printLargeText('', "blue", "large");








    try {
        const { url } = await inquirer.prompt([
            {
                type: 'input',
                name: 'url',
                message: `Enter the Website Name With ${chalk.bold.red("https:// :")} `,
                validate: (input) => {
                    if (!input || !input.match(/^https?:\/\/.+$/)) {
                        return 'Please enter a valid URL starting with http:// or https://';
                    }
                    return true;
                },
            },
        ]);
        return url;
    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return null;
    }
}

async function openURL() {
    const url = await promptForURL();
    if (url) {
        try {
            await open(url);
            console.log(`\n${chalk.bold.blue(`Opened ${url} in the default browser\n`)}`);
        } catch (error) {
            console.error(`Failed to open ${url}: ${error}`);
        }
    }
}

function checkTime() {

    function printClock(text: string = "MANI", color: string = "white", size: string = "large"): void {
        let formattedText = "";
        switch (size) {
            case "large":
                formattedText = `
    ${chalk[color].bold("     .--.                  ")}
    ${chalk[color].bold("    .-._;.--.;_.-.        ")}
    ${chalk[color].bold("   (_.'_..--.._'._)      ")}
    ${chalk[color].bold("    /.' . 60 . '.\\        ")}
    ${chalk[color].bold("   // .      / . \\\\      ")}
    ${chalk[color].bold("  |; .      /   . |;    ")}
    ${chalk[color].bold("  ||45    ()    15||    ")}
    ${chalk[color].bold("  |; .          . |;    ")}
    ${chalk[color].bold("   \\\\ .        . //      ")}
    ${chalk[color].bold("    \\'._' 30 '_.'/        ")}
    ${chalk[color].bold("     '-._'--'_.-'          ")}
    ${chalk[color].bold("         `\"\"`               ")}
    ${chalk.bold.green('         MANI                 ')}
    `;
                break;
            default:
                break;
        }
        console.log(formattedText);
    }
    
    // Example usage
    printClock("", "blue", "large");
    














    const date = new Date();

    let month: any = {
        month: "long", // This will display the full name of the month
    };
    let year: any = {
        year: "numeric",
    };

    let day: any = {
        day: "numeric",
    };

    let weekDay: any = {
        weekday: "long",
    };

    let Time: any = {
        hour: "numeric", // ghanta (0 se 23 tak)
        minute: "numeric", // minute (0 se 59 tak)
        second: "numeric",
    };

    weekDay = date.toLocaleString("en-US", weekDay);
    Time = date.toLocaleString("en-US", Time);
    day = date.toLocaleString("en-US", day);
    month = date.toLocaleString("en-US", month);
    year = date.toLocaleString("en-US", year);

    console.log(
        `\n ${chalk.bold.blue('Time is :')} ${chalk.bold.italic.rgb(192, 124, 12)(Time)}\n ${chalk.bold.blue('Date :')} ${chalk.bold.italic.rgb(192, 124, 12)(day)} / ${chalk.bold.italic.rgb(192, 124, 12)(month)} / ${chalk.bold.italic.rgb(192, 124, 12)(year)}\n ${chalk.bold.blue('And Day is :')} ${chalk.bold.italic.rgb(192, 124, 12)(weekDay)} \n`
    );
}

async function fileCreator() {


    function printFile(text: string = "MANI", color: string = "white", size: string = "large"): void {
        let formattedText = "";
        const clockColor = chalk.bold(color);
    
        switch (size) {
            case "large":
                formattedText = `
        
     .-.
     |F|_|M|A|
     |I|a|A|.|<\\
     |L|r|N| | \\
     |E|t|I|Z|  \\\\      "File Create" by
     | |!| | |   \\>     Mani Developer
    """"""""""""""""""`;
                break;
            default:
                break;
        }
        console.log(formattedText);
    }

    printFile()






    const { fileName } = await inquirer.prompt([
        {
            name: "fileName",
            type: 'input',
            message: "Enter a file name with extension:",
        }
    ]);

    const content = "print('Hello World')";

    try {
        await fs.promises.writeFile(fileName, content);
        console.log(`File '${fileName}' created successfully`);
    } catch (error) {
        console.error(`Error creating file: ${error}`);
    }
}

askQuestions().catch(console.error);
