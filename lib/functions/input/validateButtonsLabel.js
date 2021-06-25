export const validateButtonsLabel = (moreValidationChecks) => ({
  validate: (input) => {
    if (input.length < 2 || input.length > 10) {
      return "Please provide a label between 2 and 10 characteres";
    }
    return moreValidationChecks ? moreValidationChecks(input) : true;
  },
  filter: (input) => {
    return input.length < 2 || input.length > 10 ? "" : input;
  },
});
