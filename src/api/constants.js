const constants = {
  endpoint: (page) => `http://192.168.178.142:3000/${page}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default constants;
