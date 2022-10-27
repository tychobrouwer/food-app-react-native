import React, { useState } from 'react';
import {
  Text, View, Modal, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import PressableView from '../pressable-view';
import BigBtn from '../big-btn';
import capitalize from '../../utils/capitalize';

import config from '../../config';

// import styles
// import stylesMain from '../../styles';
import styles from './styles';

const RecipeListItem = function RecipeListItem({
  style, recipe,
}) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [chooseData, setChooseData] = useState();

  const ingredients = [];

  for (let i = 0; i < recipe.ingredients.length; i += 1) {
    const ingredient = recipe.ingredients[i];

    ingredients.push(
      <View key={ingredient.ingredient_ID} style={styles.ingredient}>
        <Text style={styles.ingredientItem}>-  </Text>
        <Text
          style={[styles.ingredientItem, { paddingRight: 15, flex: 1, flexWrap: 'wrap' }]}
        >
          {capitalize(ingredient.ingredient_name)}
        </Text>
        <Text
          style={styles.ingredientItem}
        >
          {ingredient.quantity}
          {ingredient.quantity_unit !== '' ? ` ${ingredient.quantity_unit}` : ''}
        </Text>
      </View>,
    );
  }

  return (
    <View style={[style, { alignItems: 'center', marginBottom: 10 }]}>
      <PressableView
        style={styles.contentWrap}
        onPress={() => {
          setModalVisible(true);
          setChooseData(recipe.recipe_instructions);
        }}
      >
        <Text style={styles.contentText}>{recipe.recipe_name}</Text>
      </PressableView>
      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        nRequestClose={() => setModalVisible(false)}
      >
        <View
          style={styles.modalView}
        >
          <ScrollView
            contentContainerStyle={{
              paddingTop: '30%',
              width: '100%',
            }}
          >
            <Text style={[styles.recipeTitle, { textAlign: 'center' }]}>{capitalize(recipe.recipe_name)}</Text>
            <Text style={styles.servings}>
              <Text style={{ fontWeight: 'bold', color: config.secondaryColor }}>
                Servings:
                {' '}
              </Text>
              {recipe.recipe_serving}
            </Text>
            <Text style={[styles.recipeTitle, styles.itemTitle]}>Ingredients</Text>
            <View style={{ width: '100%' }}>
              {ingredients}
            </View>
            <Text style={[styles.recipeTitle, styles.itemTitle]}>Instructions</Text>
            <Text style={styles.TextRec}>{chooseData}</Text>
          </ScrollView>
          <View style={styles.cancelBtnView}>
            <BigBtn
              style={styles.cancelBtn}
              title="Cancel"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

RecipeListItem.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  recipe: PropTypes.shape({
    recipe_name: PropTypes.string,
    recipe_instructions: PropTypes.string,
    recipe_serving: PropTypes.number,
    ingredients: PropTypes.arrayOf(
      PropTypes.objectOf({
        ingredient_ID: PropTypes.number,
        ingredient_name: PropTypes.string,
        quantity: PropTypes.number,
        quantity_unit: PropTypes.string,
      }),
    ),
  }).isRequired,
};

RecipeListItem.defaultProps = {
  style: {},
};

export default RecipeListItem;
