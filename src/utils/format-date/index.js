// function for capitalizing the first character of a string
const formatDate = (input) => new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
}).format(input);

export default formatDate;
