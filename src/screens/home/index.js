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
// import GroupImage from '../../../assets/group-image';
import ShoppingListImage from '../../../assets/shopping-list-image';
import HomeImage from '../../../assets/home-image';
import BackArrowImage from '../../../assets/back-arrow-image';
import PlusImage from '../../../assets/plus-image';
// import AddProductImage from '../../../assets/add-product-image';

import styles from './styles';

const HomeScreen = function HomeScreen() {
  // const globalState = useContext(GlobalStateContext);

  return (
    <ScreenDefault>
      <View style={styles.topNav}>
        <TouchableOpacity>
          <BackArrowImage style={styles.navLink} width={35} height={35} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <GroupImage style={styles.navLink} width={70} height={70} />
        </TouchableOpacity> */}
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
        <TouchableOpacity style={styles.navItem}>
          <HomeImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ShoppingListImage style={styles.navLink} width={40} height={40} />
          {/* <ShoppingListImage style={styles.navLink} width={70} height={70} /> */}
        </TouchableOpacity>
        <View style={styles.navItem} />
        <TouchableOpacity style={styles.navItem}>
          {/* <AddProductImage style={styles.navLink} width={110} height={110} /> */}
          <RecipesImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SettingsImage style={styles.navLink} width={40} height={40} />
          {/* <RecipesImage style={styles.navLink} width={70} height={70} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.bigNavItem]}>
          <PlusImage style={styles.navLink} width={90} height={90} />
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
