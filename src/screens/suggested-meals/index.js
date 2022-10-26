import React, {
  useEffect, useState, useContext,
} from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, FlatList, RefreshControl, Modal, TouchableOpacity,
} from 'react-native';

// import components and utils
import {
  GlobalStateContext,
} from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import config from '../../config';
import { searchIngredientRecipe } from '../../api/recipes';
// import styles
import styles from './styles';
import stylesMain from '../../styles';
import PressableView from '../../components/pressable-view';
import { SimpleModal } from '../../components/modal';

// return the home screen component
const RecipesSuggestedScreen = function RecipesSuggestedScreen({ navigation }) {
  const { inventory } = useContext(GlobalStateContext);
  const today = new Date();
  const invenvetory_expire = inventory.filter((item) => new Date(item.date).getTime() < new Date(new Date().setDate(today.getDate() + 3)).getTime()).map((ingredientData) => ingredientData.name);
  const [listItems, setListItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [isModalVisable, setModalVisable] = useState(false);

  const [chooseData, setChooseData] = useState();

  const changeModelVisable = (bool) => {
    setModalVisable(bool);
  };

  const setData = (data) => {
    setChooseData(data);
  };

  const showRecipeBasedOnIng = async () => {
    const newList = await searchIngredientRecipe(invenvetory_expire);
    console.log(newList);
    setListItems(newList);
  };

  useEffect(() => {
    showRecipeBasedOnIng();
  }, []);

  const renderItem = ({ item }) => {
    console.log(item);
    console.log(item);

    const instruction = item.recipe_instructions;

    return (
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <PressableView style={styles.contentWrap} onPress={() => { changeModelVisable(true); setData(item.recipe_instructions); }}>
          <Text style={styles.contentText}>
            {' '}
            {item.recipe_name}
            {' '}
          </Text>
        </PressableView>

        <Modal
          transparent
          visible={isModalVisable}
          stanimationType="fade"
          nRequestClose={() => changeModelVisable(false)}
        >
          <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 50,
          }}
          >

            <Text style={styles.buttonRecipes}> Recipe Instructions </Text>

            <Text style={styles.TextRec}>{chooseData}</Text>

            <PressableView style={styles.contentWrap} onPress={() => changeModelVisable(false)}>

              <Text style={styles.buttonRecipes}> Cancel </Text>

            </PressableView>

          </View>
        </Modal>

      </View>
    );
  };

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
          renderItem={(v) => (
            renderItem(v, () => {
              console.log('Clicked');
            })
          )}
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
