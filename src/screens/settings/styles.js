import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the settings screen
const styles = StyleSheet.create({
  banner: {
    height: '20%',
    justifyContent: 'center',
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  },

  secondaryText: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: config.secondaryColor,
  },

  signOutBtn: {
    backgroundColor: config.errorColor,
    color: config.tertiaryColor,
  },
});

export default styles;
