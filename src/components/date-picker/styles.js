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
    zIndex: 5,
  },

  TextInputWrapper: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  TextInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  datePickerContainer: {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  datePicker: {
    borderRadius: 15,
    width: '102%',
  },
});

export default styles;
