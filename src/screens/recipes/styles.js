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
    marginTop: '13%',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 35,
    textAlign: 'center',
<<<<<<< HEAD
=======
    color: 'white',
>>>>>>> d0a9d6dd864dec1f9dd535ac8ca6b3756375bda0
  },

  topNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
  },

});

export default styles;
