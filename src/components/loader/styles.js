import { StyleSheet } from 'react-native';

// import the config
import config from '../../config';

// styles for the loader component
const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: config.primaryColor,
  },
});

export default styles;
