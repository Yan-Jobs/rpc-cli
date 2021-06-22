// Load The CLI
import Configstore from "configstore";
import parseArgumentsIntoOptions from "./functions/parseArgumentIntoOptions.js";
import prompt from "./questions/prompt.js";

const config = new Configstore(".rpcrc", {
  default: {
    clientId: "831107233198505994",
    buttons: {
      b1: {
        url: "https://github.com/Yanjobs/",
        label: "GitHub"
      },
      b2: {
        url: "https://yanjobs.me",
        label: "WebSite"
      }
    },
    assets: {
      large: {
        name: "logo",
        text: "Heyyya"
      }
    },
    text: {
      details: "Testing smthg good !",
      state: "And that's true !"
    }
  }
});

export default async function cli(process) {
  const options = parseArgumentsIntoOptions(process.argv);
  await prompt(options, config);
}
