import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the add product screen
const styles = StyleSheet.create({
  scannerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanner: {
    width: '85%',
    aspectRatio: 1,
  },

  cameraTextContainer: {
    position: 'absolute',
    top: '5%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
  },

  cameraText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: config.errorColor,
  },

  cameraButton: {
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    aspectRatio: 1,
    backgroundColor: config.tertiaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  destinationWrapper: {
    width: '100%',
    backgroundColor: config.tertiaryColor,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
  },

  destinationBtn: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectorActive: {
    backgroundColor: config.secondaryTextColor,
    borderRadius: 5,
  },

  selectorText: {
    color: config.primaryTextColor,
    fontWeight: 'bold',
    fontSize: 18,
  },

  inputStyle: {
    marginBottom: '8%',
  },

  addButton: {
    alignSelf: 'center',
  },
});

export default styles;
