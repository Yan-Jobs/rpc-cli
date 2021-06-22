import inquirer from "inquirer";

export default async function prompt(options, config) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What do you want to do?",
        choices: [
          "Use a config",
          new inquirer.Separator(),
          "Create a new config"
        ]
      }
    ])
    .then((questions) => {
      if (questions.choice === "Use a config") {
      } else {
      }
    });
}
