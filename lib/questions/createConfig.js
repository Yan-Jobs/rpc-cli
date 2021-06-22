import inquirer from "inquirer";
export default async function createConfig() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "client_id",
        message: "What is your client id ?"
      }
    ])
    .then((answers) => {
      if (isNaN(answers.client_id)) {
        console.log("Your client id must be a valid number !");
        createConfig();
      }
    });
}
