import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the bif text input component
const styles = StyleSheet.create({
  inputView: {
    borderColor: config.tertiaryColor,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
    width: '100%',
  },

  TextInput: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },
});

export default styles;
