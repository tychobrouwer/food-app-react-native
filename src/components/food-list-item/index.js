import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

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

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

FoodListItem.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  food: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  quantityType: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
