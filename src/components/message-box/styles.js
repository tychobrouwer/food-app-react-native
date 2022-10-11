import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the loader component
const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderWidth: 1,
    zIndex: 100,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  message: {
    color: config.primaryTextColor,
    borderColor: config.primaryTextColor,
  },

  error: {
    color: config.errorColor,
    borderColor: config.errorColor,
  },

  success: {
    color: config.successColor,
    borderColor: config.successColor,
  },
});

export default styles;
