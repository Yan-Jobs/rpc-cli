#!/usr/bin/env node

import arg from "arg";
import fs from "fs";

fs.access("/.rpcrc.json", fs.F_OK, (err) => {
  if (err) {
    console.error(err);
    fs.appendFile("/.rpcrc.json", "{\n}", function (err) {
      if (err) throw err;
      console.log("Fichier créé !");
    });
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
function cli(args) {
  const options = parseArgumentsIntoOptions(args);
  console.log(options);
}

cli(process.argv);
