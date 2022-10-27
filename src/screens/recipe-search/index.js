import React, { useState } from 'react';
import {
  View, FlatList, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import SearchBar from 'react-native-platform-searchbar';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import { searchRecipe } from '../../api/recipes';
import RecipeListItem from '../../components/recipe-list-item';

import config from '../../config';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const RecipesSearchScreen = function RecipesSearchScreen({ navigation }) {
  const [value, setValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const updateSearch = async (query) => {
    if (query !== '') {
      setListItems(await searchRecipe(query));
    }
  };

  const renderItem = ({ item }) => (
    <RecipeListItem
      recipe={item}
    />
  );

  return (
    <ScreenDefault scrollEnabled={false}>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <SearchBar
          style={styles.searchBar}
          placeholder="Search for recipe"
          onChangeText={(newValue) => {
            setValue(newValue);
            updateSearch(newValue);
          }}
          value={value}
        />
        <FlatList
          style={styles.flatList}
          decelerationRate="fast"
          refreshControl={(
            <RefreshControl
              colors={config.secondaryColor}
              tintColor={config.secondaryColor}
              refreshing={refreshing}
              onRefresh={async () => {
                setRefreshing(true);
                await updateSearch(value);
                setRefreshing(false);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          data={listItems}
          extraData={listItems}
          renderItem={(v) => renderItem(v)}
          keyExtractor={(item) => item.recipe_ID}
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
