import PropTypes from 'prop-types';

// standard values for the styles
const config = {
  primaryColor: '#60C9CD',
  secondaryColor: '#B336F7',
  tertiaryColor: '#FFF',
  primaryTextColor: '#222',
  secondaryTextColor: '#999',
  errorColor: '#F00',

  styleProp: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]))),
  ])),
};

export default config;
