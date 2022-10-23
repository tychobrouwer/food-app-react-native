import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the big button component
const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
  },

  swipeable: {
    marginBottom: 10,
    borderRadius: 5,
  },

  itemTextBox: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '70%',
  },

  expiration: {
    fontSize: 21,
  },

  title: {
    fontSize: 28,
  },
});

export default styles;
