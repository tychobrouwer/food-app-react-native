import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the sign up screen
const styles = StyleSheet.create({
  titleText: {
    fontSize: '36px',
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
