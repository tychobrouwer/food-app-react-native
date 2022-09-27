import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

// styles for the home screen
const styles = StyleSheet.create({
  topNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
  },

  contentHeader: {
    width: '100%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    color: config.primaryTextColor,
    alignItems: 'center',
    borderRadius: 5,
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  contentItem: {
    width: '100%',
    height: 80,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  contentItemText: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default styles;
