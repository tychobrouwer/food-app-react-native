import { StyleSheet, Dimensions } from 'react-native';

// screen height of the machine running the app
const ScreenHeight = Dimensions.get('window').height;

// main styles for the application
// which will be used on multiple screens
const stylesMain = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: ScreenHeight,
    display: 'flex',
    flexDirection: 'column',
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },

  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notification: {
    height: 20,
    width: '100%',
    marginLeft: 20,
  },

  notificationText: {
    color: 'red',
  },

  banner: {
    alignItems: 'center',
    height: '40%',
  },

  link: {
    fontSize: 18,
    color: '#986FAF',
    fontWeight: 'bold',
    padding: 8,
    margin: -8,
  },

  checkbox: {
    padding: 5,
    margin: 5,
    borderColor: '#fff',
  },

  hidden: {
    display: 'none',
  },
});

export default stylesMain;
