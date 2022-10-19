// function for capitalizing the first character of a string
const formatDate = (input) => new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'long',
}).format(input);

const formatDateAlt = (input) => {
  const year = input.toLocaleString('default', { year: 'numeric' });
  const month = input.toLocaleString('default', { month: '2-digit' });
  const day = input.toLocaleString('default', { day: '2-digit' });

  return `${year}-${month}-${day}`;
};

export { formatDate, formatDateAlt };
