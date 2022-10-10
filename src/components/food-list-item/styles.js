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
  },

  swipeable: {
    backgroundColor: config.errorColor,
    marginBottom: 10,
    borderRadius: 5,
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

  deleteView: {
    backgroundColor: config.errorColor,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    width: '30%',
  },

  deleteTextView: {
    height: '100%',
    justifyContent: 'center',
  },

  deleteText: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
