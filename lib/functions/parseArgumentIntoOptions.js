import arg from "arg";

export default function parseArgumentsIntoOptions(rawArgs) {
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
