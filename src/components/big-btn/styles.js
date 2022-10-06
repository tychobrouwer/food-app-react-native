import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the big button component
const styles = StyleSheet.create({
  bigBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: config.tertiaryColor,
    color: config.primaryColor,
    marginBottom: 20,
  },

  bigBtnText: {
    fontWeight: 'bold',
    color: config.secondaryColor,
    fontSize: 21,
  },
});

export default styles;
