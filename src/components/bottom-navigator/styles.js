import { StyleSheet } from 'react-native';

// import the style config
import config from '../../styles/config';

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
    height: 90,
    marginBottom: -20,
    marginTop: -20,
  },

  bigNavItem: {
    position: 'absolute',
    marginLeft: '50%',
    marginRight: '50%',
    paddingBottom: 20,
  },

  navLink: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default styles;
