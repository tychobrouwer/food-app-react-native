import { StyleSheet } from 'react-native';

const stylesMain = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#60c9cd',
    color: '#fff',
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
    color: 'rgba(255, 102, 196, 0.53)',
    fontWeight: 'bold',
    padding: 5,
    margin: -5,
  },

  checkbox: {
    padding: 5,
    margin: 5,
  },

  checkboxText: {
    color: '#fff',
  },
});

export default stylesMain;
