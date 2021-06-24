export const validateConfigName = (moreValidationChecks) => ({
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
