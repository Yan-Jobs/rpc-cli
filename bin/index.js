#!/usr/bin/env node

import arg from "arg";

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
function cli(args) {
  const options = parseArgumentsIntoOptions(args);
  console.log(options);
}

cli(process.argv);
