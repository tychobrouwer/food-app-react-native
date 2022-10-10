import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the big button component
const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 80,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },

  itemTextBox: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  itemText: {
    paddingVertical: 2,
  },

  title: {
    fontSize: 21,
  },

  propTitle: {
    color: config.secondaryTextColor,
  },
});

export default styles;
