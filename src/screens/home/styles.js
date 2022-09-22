import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '12%',
  },

  bottomNav: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8%',
  },

  content: {
    width: '80%',
    marginTop: '5%',
    marginBottom: '5%',
    flexGrow: 1,
  },

  navLink: {
    marginTop: 'auto',
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
