import React, {
  useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, FlatList, RefreshControl,
} from 'react-native';

// import components and utils
import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import { searchIngredientRecipe } from '../../api/recipes';

import config from '../../config';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import RecipeListItem from '../../components/recipe-list-item';

// return the home screen component
const RecipesSuggestedScreen = function RecipesSuggestedScreen({ navigation }) {
  const { inventory } = useContext(GlobalStateContext);
  const today = new Date();
  const inventoryExpire = inventory.filter(
    (item) => (
      new Date(item.date).getTime() < new Date(new Date().setDate(today.getDate() + 3)).getTime()
    ),
  ).map((ingredientData) => ingredientData.name);
  const [listItems, setListItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const showRecipeBasedOnIng = async () => {
    const newList = await searchIngredientRecipe(inventoryExpire);

    setListItems(newList);
  };

  useEffect(() => {
    showRecipeBasedOnIng();
  }, []);

  const renderItem = ({ item }) => (
    <RecipeListItem
      recipe={item}
    />
  );

  return (
    <ScreenDefault scrollEnabled={false}>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Suggested Meals
          </Text>
        </View>
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
                await showRecipeBasedOnIng();
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

RecipesSuggestedScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipesSuggestedScreen;
