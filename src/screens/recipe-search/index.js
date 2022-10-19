import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from 'react-native-platform-searchbar';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
// import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const RecipesSearchScreen = function RecipesSearchScreen({ navigation }) {
  const [value, setValue] = useState('');

  return (
    <ScreenDefault scrollEnabled>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>

        <SearchBar
          placeholder="Search for recipe"
          onChangeText={setValue}
          value={value}
        />

      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

RecipesSearchScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipesSearchScreen;
