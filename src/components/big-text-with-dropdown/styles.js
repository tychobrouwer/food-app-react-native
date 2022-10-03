import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the bif text input component
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: config.tertiaryColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
  },

  inputView: {
    // flexGrow: 1,
    width: 'auto',
    justifyContent: 'center',
  },

  textInput: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  dropdownStyle: {
    flex: 1,
    justifyContent: 'center',
    width: 90,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  dropdown: {
    height: 'auto',
  },

  dropdownText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },
});

export default styles;
