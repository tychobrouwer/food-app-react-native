import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';
import capitalize from '../../utils/capitalize';

// import styles
import stylesMain from '../../styles';
import styles from './styles';

// return the big button component
const FoodListItem = function FoodListItem({
  food, date, quantity, quantityType, style,
}) {
  const quantityString = (quantityType === 'units') ? '' : quantityType;

  return (
    <View style={[styles.content, style]}>
      <View style={styles.itemTextBox}>
        <Text style={[stylesMain.text, styles.itemText]}>
          <Text style={styles.propTitle}>FOOD: </Text>
          <Text>{capitalize(food)}</Text>
        </Text>
        <Text style={[stylesMain.text, styles.itemText]}>
          <Text style={styles.propTitle}>QUANTITY: </Text>
          <Text>{`${quantity} ${quantityString}`}</Text>
        </Text>
        <Text style={[stylesMain.text, styles.itemText]}>
          <Text style={styles.propTitle}>EXPIRATION DATE: </Text>
          <Text>{date.toLocaleDateString()}</Text>
        </Text>
      </View>
    </View>
  );
};

FoodListItem.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  food: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  quantityType: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
