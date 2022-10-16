import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the recipe screen
const styles = StyleSheet.create({
  buttonSuggetsions: {
    borderRadius: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '25%',
    backgroundColor: '#9643C3',
    marginTop: '5%',
  },

  buttonMyMeals: {
    borderRadius: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '28%',
    backgroundColor: '#9643C3',
    marginTop: '5%',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },

  topNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
  },

  container: {
    width: '80%',
    height: '6%',
    backgroundColor: 'white',
    borderRadius: '100%',
    marginTop: '15%',
  },

  searchInput: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    alignItems: 'centre',
    paddingLeft: '5%',
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  contentHeader: {
    width: '70%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '50%',
  },

  contentHeader2: {
    width: '70%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '15%',
  },

});

export default styles;
