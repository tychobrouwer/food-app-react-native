import { StyleSheet } from 'react-native';

export const stylesMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  inputView: {
    borderColor: "grey",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    width: "90%",
    flex: 1,
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    color: "black",
  },

  flex: {
    flexDirection: "row",
    alignItems: "center",
  },

  link: {
    color: "blue",
  },

  checkbox: {
    margin: 5,
  },
});
