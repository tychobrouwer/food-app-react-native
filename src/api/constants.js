const constants = {
  serverIP: '192.168.178.142',
  serverPort: 3000,
  endpoint: (page) => `http://${constants.serverIP}:${constants.serverPort}/${page}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export default constants;
