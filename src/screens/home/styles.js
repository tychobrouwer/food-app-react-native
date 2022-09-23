import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // topNav: {
  //   width: '85%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: '12%',
  // },

  topNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%',
  },

  // bottomNav: {
  //   width: '85%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: '8%',
  // },

  bottomNav: {
    width: '102%',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 30,
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    height: 90,
    marginBottom: -20,
    marginTop: -20,
  },

  bigNavItem: {
    backgroundColor: 'red',
    position: 'absolute',
    marginLeft: '50%',
    marginRight: '50%',
    // padding: 10,
  },

  // content: {
  //   width: '80%',
  //   marginTop: '5%',
  //   marginBottom: '5%',
  //   flexGrow: 1,
  // },

  content: {
    width: '80%',
    marginTop: '5%',
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
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
  },

  contentHeaderText: {
    fontSize: 32,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: 'bold',
  },

  contentItem: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
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
