import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the bif text input component
const styles = StyleSheet.create({
  bottomNav: {
    width: '103%',
    backgroundColor: config.tertiaryColor,
    paddingBottom: 40,
    marginBottom: -20,
    paddingTop: 10,
    borderRadius: 30,
    alignItems: 'center',
  },

  bottomNavWrapper: {
    flexDirection: 'row',
    width: '94%',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    marginBottom: -5,
    marginTop: -5,
  },

  bigNavItem: {
    position: 'absolute',
    marginLeft: '50%',
    marginRight: '50%',
    paddingBottom: 20,
    width: 90,
    height: 90,
  },

  navLink: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
});

export default styles;
