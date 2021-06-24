export const validateClientId = (moreValidationChecks) => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide a valid number greater than 0";
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) => {
    // Clear the invalid input
    return Number.isNaN(input) || Number(input) <= 0 ? "" : Number(input);
  }
});
