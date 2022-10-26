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

  dropdownBtn: {
    paddingLeft: 10,
    paddingVertical: 12,
  },

  dropdownStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: config.tertiaryColor,
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
  },

  dropdownChevron: {
    paddingRight: 5,
  },

  dropdown: {
    paddingLeft: 5,
    marginRight: 30,
  },

  dropdownText: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.secondaryColor,
  },
});

export default styles;
