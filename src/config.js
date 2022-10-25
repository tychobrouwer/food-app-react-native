import PropTypes from 'prop-types';

// standard values for the styles
const config = {
  primaryColor: '#60C9CD',
  secondaryColor: '#B336F7',
  tertiaryColor: '#FFFFFF',
  primaryTextColor: '#222222',
  secondaryTextColor: '#999999',
  errorColor: '#FF0000',
  warningColor: '#FF9966',
  successColor: '#00E000',

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
