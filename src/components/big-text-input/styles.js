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
    width: '100%',
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
  },

  TextInput: {
    width: '90%',
    flex: 1,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },
});

export default styles;
