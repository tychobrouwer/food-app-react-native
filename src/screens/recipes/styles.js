import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the home screen
const styles = StyleSheet.create({
  buttonRecipes: {
    borderRadius: 15,
    paddingVertical: '15%',
    backgroundColor: config.secondaryColor,
    marginTop: '25%',
    marginBottom: '15%',
  },

  buttonText: {
    color: config.tertiaryColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 35,
    width: '100%',
    textAlign: 'center',
  },
});

export default styles;
