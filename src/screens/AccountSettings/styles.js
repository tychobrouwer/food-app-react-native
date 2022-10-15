import { StyleSheet } from 'react-native';

// import the style config
import config from '../../config';

// styles for the settings screen
const styles = StyleSheet.create({
    topNav: {
      width: '85%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '15%',
    },
  
    contentHeader: {
      width: '100%',
      height: 80,
      backgroundColor: config.tertiaryColor,
      color: config.primaryTextColor,
      alignItems: 'center',
      borderRadius: 15,
      padding: 0,
      flex: 0,
      
    },
  
    contentHeaderText: {
      fontSize: 32,
      marginTop: 'auto',
      marginBottom: 'auto',
      fontWeight: 'bold',
      color: config.primaryTextColor,
    },
  });
  

export default styles;