import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the settings screen
const styles = StyleSheet.create({
  settingTitle: {
    width: '100%',
    paddingBottom: 5,
    paddingHorizontal: 27,
    fontSize: 18,
    fontWeight: 'bold',
  },

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
});

export default styles;
