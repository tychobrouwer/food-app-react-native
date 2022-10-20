import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the settings screen
const styles = StyleSheet.create({
  contentHeader: {
    width: '100%',
    height: 50,
    backgroundColor: config.tertiaryColor,
    color: config.primaryTextColor,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: '10%',
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
    color: config.primaryTextColor,
  },

  settingTitle: {
    width: '100%',
    paddingBottom: 5,
    paddingHorizontal: 27,
    fontSize: 18,
    fontWeight: 'bold',
  },

  flatList: {
    width: '100%',
    height: 40,
  },
});

export default styles;
