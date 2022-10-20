import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';
import capitalize from '../../utils/capitalize';

// import styles
import stylesMain from '../../styles';
import styles from './styles';
import SwipeableListItem from '../swipeable-list-item';

// return the big button component
const FoodListItem = function FoodListItem({
  food, date, quantity, quantityType, style, itemID, closeRow, deleteItem, innerRef,
}) {
  const quantityString = (quantityType === 'units') ? '' : quantityType;

  return (
    <SwipeableListItem
      innerRef={innerRef}
      closeRow={closeRow}
      itemID={itemID}
      deleteItem={deleteItem}
      style={style}
      height={80}
    >
      <View style={styles.itemTextBox}>
        <Text style={[stylesMain.text, styles.itemText]}>
          <Text style={styles.title}>{capitalize(food)}</Text>
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
    </SwipeableListItem>
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
  itemID: PropTypes.number.isRequired,
  closeRow: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
