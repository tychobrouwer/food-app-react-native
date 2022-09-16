import { StyleSheet } from 'react-native';

const stylesMain = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },

  container: {
    height: '100%',
    alignItems: 'center',
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

  link: {
    color: 'blue',
    padding: 5,
    margin: -5,
  },

  checkbox: {
    padding: 5,
    margin: 5,
  },
});

export default stylesMain;
