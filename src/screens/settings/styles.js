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

  bottomNav: {
    width: '103%',
    backgroundColor: config.tertiaryColor,
    paddingBottom: 20,
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

  content: {
    width: '80%',
    marginTop: '10%',
    marginBottom: '5%',
    flexGrow: 1,
  },

  navLink: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  contentHeader: {
    width: '100%',
    height: 50,
    backgroundColor: config.tertiaryColor,
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
