import React from 'react';
import {
  View, Text
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const GroceryListScreen = function GroceryListScreen({ navigation }) {
  return (
    <ScreenDefault>
        <TopNavigator navigation={navigation} />
      
          <View style={stylesMain.content}>
            <View style={styles.contentHeader}>
              <Text style={styles.contentHeaderText}>
                Grocery List
              </Text>
            </View>
            
        <View style = {styles.directionRow}>
            <View style={styles.contentSubHeader}>
              <Text style={styles.contentSubHeaderText}>
                Product
              </Text>
            </View>

            <View style={styles.contentSubHeader} marginLeft='20%'>
              <Text style={styles.contentSubHeaderText}>
                Quantity
              </Text>
            
            </View>
        </View>
            
         </View>

        <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

GroceryListScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GroceryListScreen;
