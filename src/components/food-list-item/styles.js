import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the big button component
const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 80,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  itemTextBox: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  itemText: {
    paddingVertical: 2,
  },

  propTitle: {
    color: config.secondaryTextColor,
  },
});

export default styles;
