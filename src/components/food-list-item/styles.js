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
    width: '80%',
  },

  expiration: {
    fontSize: 21,
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
  },
});

export default styles;
