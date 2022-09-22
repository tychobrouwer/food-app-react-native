import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
// import PropTypes from 'prop-types';

// import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
// import { secureStoreDelete } from '../../utils/secure-store';

import SettingsImage from '../../../assets/settings-image';
import RecipesImage from '../../../assets/recipes-image';
import GroupImage from '../../../assets/group-image';
import ShoppingListImage from '../../../assets/shopping-list-image';
import AddProductImage from '../../../assets/add-product-image';

import styles from './styles';

const HomeScreen = function HomeScreen() {
  // const globalState = useContext(GlobalStateContext);

  return (
    <ScreenDefault>
      <View style={styles.topNav}>
        <TouchableOpacity>
          <SettingsImage style={styles.navLink} width={70} height={70} />
        </TouchableOpacity>
        <TouchableOpacity>
          <GroupImage style={styles.navLink} width={70} height={70} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            CALENDAR
          </Text>
        </TouchableOpacity>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <ShoppingListImage style={styles.navLink} width={70} height={70} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AddProductImage style={styles.navLink} width={110} height={110} />
        </TouchableOpacity>
        <TouchableOpacity>
          <RecipesImage style={styles.navLink} width={70} height={70} />
        </TouchableOpacity>
      </View>
      {/* <Text style={{ marginTop: '40%' }}>
        This is&nbsp;
        { globalState.credentials.email }
        &apos;s profile
      </Text>

      <Button
        title="Logout"
        onPress={() => {
          secureStoreDelete('email');
          secureStoreDelete('token');

          navigation.replace('SignIn');
        }}
      /> */}
    </ScreenDefault>
  );
};

// HomeScreen.propTypes = {
//   navigation: PropTypes.shape({
//     replace: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default HomeScreen;
