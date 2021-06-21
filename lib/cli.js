// Load The CLI
import Configstore from "configstore";
import arg from "arg";

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
function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {},
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    configName: args._[0] || null
  };
}

export default async function cli(process) {
  const options = parseArgumentsIntoOptions(process.argv);
  console.log(options);
}
