import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the sign up screen
const styles = StyleSheet.create({
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: '30%',
    marginBottom: '5%',
  },

  loginContainer: {
    marginTop: '5%',
    width: '70%',
    alignItems: 'center',
  },

  text: {
    color: config.tertiaryColor,
    fontSize: 18,
  },
});

export default styles;
