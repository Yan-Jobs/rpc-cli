import inquirer from "inquirer"; // Import inquirer to prompt questions

// Import the validations files
import { validateConfigName } from "../functions/input/validateConfigName.js";
import { validateButtonsCount } from "../functions/input/validateButtonsCount.js";
import { validateClientId } from "../functions/input/validateClientId.js";
import { validateButtonsLabel } from "../functions/input/validateButtonsLabel.js";

// Export the command
export default async function createConfig() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "config_name",
        message: "What is the name of your config ?",
        ...validateConfigName(),
      },
      {
        type: "number",
        name: "client_id",
        message: "What is your client id ?",
        ...validateClientId(),
      },
      {
        type: "input",
        name: "detail",
        message: "What detail would you like to have into your status ?",
      },
      {
        type: "confirm",
        name: "active_buttons",
        message: "Should I active buttons ?",
      },
    ])
    .then((answers) => {
      // Test if the user answered yes to enable buttons
      if (answers.active_buttons === true) {
        inquirer
          .prompt([
            {
              type: "numbers",
              name: "buttons_numbers",
              message: "How much buttons do you want ?",
              ...validateButtonsCount(),
            },
          ])
          .then((answersTwo) => {
            if (answersTwo.buttons_numbers === 1) {
              inquirer
                .prompt([
                  {
                    type: "input",
                    message: "What label should I display ?",
                    name: "buttons_label_one",
                    ...validateButtonsLabel(),
                  },
                ])
                .then((answersThree) => {
                  console.log(answersThree);
                  console.log(answersTwo);
                  console.log(answers);
                });
            } else {
              inquirer
                .prompt([
                  {
                    type: "input",
                    message: "What label should I display ?",
                    name: "buttons_label_one",
                    ...validateButtonsLabel(),
                  },
                  {
                    type: "input",
                    message: "What label should I display ?",
                    name: "buttons_label_two",
                    ...validateButtonsLabel(),
                  },
                ])
                .then((answersThree) => {
                  console.log(answersThree);
                  console.log(answersTwo);
                  console.log(answers);
                });
            }
          });
      }
    });
}
createConfig();
