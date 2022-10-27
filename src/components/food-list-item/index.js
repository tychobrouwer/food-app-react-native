import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

import capitalize from '../../utils/capitalize';
import SwipeableListItem from '../swipeable-list-item';

import config from '../../config';

// import styles
// import stylesMain from '../../styles';
import styles from './styles';

// return the big button component
const FoodListItem = function FoodListItem({
  food, date, quantity, quantityType, style, itemID, closeRow, deleteItem, innerRef, showExpiration,
}) {
  const quantityString = (quantityType === 'units') ? '' : quantityType;

  const today = new Date();
  const expired = showExpiration
    && date.getTime() < new Date(today.setHours(0, 0, 0, 0)).getTime();
  const expiredClose = showExpiration
    && date.getTime() < new Date(
      new Date(today.setHours(0, 0, 0, 0)).setDate(today.getDate() + 3),
    ).getTime();

  let dateColor = config.primaryTextColor;
  if (expired) {
    dateColor = config.errorColor;
  } else if (expiredClose) {
    dateColor = config.warningColor;
  }

  return (
    <SwipeableListItem
      innerRef={innerRef}
      closeRow={closeRow}
      itemID={itemID}
      deleteItem={deleteItem}
      style={[
        style,
        { height: showExpiration ? 80 : 55 },
      ]}
      height={showExpiration ? 80 : 55}
    >
      <View style={styles.itemTextBox}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.title, { width: '60%' }]}>{capitalize(food)}</Text>
          <Text style={styles.title}>{`${quantity} ${quantityString}`}</Text>
        </View>
        { showExpiration && (
          <Text style={[styles.expiration, { color: dateColor }]}>
            {date.toLocaleDateString()}
          </Text>
        )}
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
  showExpiration: PropTypes.bool.isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
