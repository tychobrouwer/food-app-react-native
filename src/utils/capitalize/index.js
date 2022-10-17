// function for capitalizing the first character of a string
const capitalize = (input) => {
  if (input === null) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
};

export default capitalize;
