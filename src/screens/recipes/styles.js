import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the home screen
const styles = StyleSheet.create({
  buttonRecipes: {
    borderRadius: 15,
    paddingVertical: '15%',
    paddingHorizontal: '0%',
    backgroundColor: config.secondaryColor,
    marginTop: '25%',
    marginBottom: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 35,
    textAlign: 'center',
    width: '85%',
    justifyContent: 'space-between',
    justifyContent: 'center',
  },

});

export default styles;
