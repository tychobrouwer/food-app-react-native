import { StyleSheet } from 'react-native';

export const stylesMain = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },

  container: {
    height: '100%',
    alignItems: 'center',
  },

  inputView: {
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 5,
    width: '100%',
    height: 45,
    marginBottom: 5,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    width: '90%',
    flex: 1,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
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
    margin: 5,
  },

  bigBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    color: 'white',
    marginBottom: 20,
  },
});
