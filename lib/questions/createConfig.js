import inquirer from "inquirer";
export default async function createConfig() {
  const validateInput = (moreValidationChecks) => ({
    validate: (input) => {
      if (input.length < 2 || input.length > 10) {
        return "Please provide a name between 2 and 10 characteres";
      }
      return moreValidationChecks ? moreValidationChecks(input) : true;
    },
    filter: (input) => {
      // Clear the invalid input
      return input.length < 2 || input.length > 10 ? "" : input;
    }
  });
  const validateNumbers = (moreValidationChecks) => ({
    validate: (input) => {
      if (input === "") {
        return "Please provide a valid number greater then 0";
      }
      return moreValidationChecks ? moreValidationChecks(input) : true;
    },
    filter: (input) => {
      // Clear the invalid input
      return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
    }
  });
  inquirer
    .prompt([
      {
        type: "input",
        name: "config_name",
        message: "What is the name of your config ?",
        ...validateInput()
      },
      {
        type: "number",
        name: "client_id",
        message: "What is your client id ?",
        ...validateNumbers()
      },
      {
        type: "input",
        name: "detail",
        message: "What detail would you like to have into your status ?"
      },
      {
        type: "confirm",
        name: "active_buttons",
        message: "Should I active buttons ?"
      }
    ])
    .then((answers) => {
      if (answers.active_buttons === true) {
        inquirer
          .prompt([
            {
              type: "numbers",
              name: "buttons_numbers",
              message: "How much buttons do you want ?"
            }
          ])
          .then((answersTwo) => {
            console.log(answersTwo);
            console.log(answers);
          });
      } else return;
    });
}
createConfig();
