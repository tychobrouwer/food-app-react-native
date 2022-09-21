import { StyleSheet, Dimensions } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;

const stylesMain = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: ScreenHeight,
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
    color: '#c98fe9',
    fontWeight: 'bold',
    padding: 5,
    margin: -5,
  },

  checkbox: {
    padding: 5,
    margin: 5,
    borderColor: '#fff',
    // backgroundColor: '#fff',
  },

  hidden: {
    display: 'none',
  },
});

export default stylesMain;
