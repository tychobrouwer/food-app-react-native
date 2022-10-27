import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the home screen
const styles = StyleSheet.create({
  contentHeader: {
    width: '100%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    color: config.primaryTextColor,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    alignItems: 'center',
    color: config.primaryTextColor,
  },

  flatList: {
    borderRadius: 5,
    flex: 1,
    marginBottom: 20,
  },
});

export default styles;
