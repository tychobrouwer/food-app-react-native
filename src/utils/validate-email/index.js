// function for validating email
const validateEmail = (email) => {
  // regex match for valid email
  const check = String(email)
    .toLowerCase()
    .match(
      // eslint-disable-next-line no-useless-escape
      /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
    );

  if (check) {
    // return email if valid
    return check[0];
  }

  // return null if not valid
  return null;
};

export default validateEmail;
