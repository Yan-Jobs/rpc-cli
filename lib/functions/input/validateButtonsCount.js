export const validateButtonsCount = (moreValidationChecks) => ({
  validate: (input) => {
    if (input === "") {
      return "Please provide a valid number between 1 and 2";
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) => {
    // Clear the invalid input
    return Number.isNaN(input) || Number(input) > 2 || Number(input) <= 0
      ? ""
      : Number(input);
  },
});
