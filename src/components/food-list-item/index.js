import React, { useState, useRef } from 'react';
import {
  Text, View, TouchableOpacity, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import config from '../../config';
import capitalize from '../../utils/capitalize';

// import styles
import stylesMain from '../../styles';
import styles from './styles';

// return the big button component
const FoodListItem = function FoodListItem({
  food, date, quantity, quantityType, style, index, closeRow, deleteItem, innerRef,
}) {
  const quantityString = (quantityType === 'units') ? '' : quantityType;
  const [visible, setVisible] = useState(false);
  const itemHeight = useRef(new Animated.Value(80)).current;
  const itemOpacity = useRef(new Animated.Value(1)).current;

  const onRemoving = (callback) => {
    Animated.parallel([
      Animated.timing(itemOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(itemHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start(callback);
  };

  const renderRightActions = () => (
    <View style={styles.deleteView}>
      <TouchableOpacity
        onPress={() => {
          if (visible) {
            onRemoving(() => deleteItem());
          }
        }}
      >
        <View style={styles.deleteTextView}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable
      onSwipeableOpen={() => {
        setVisible(true);
        closeRow(index);
      }}
      ref={innerRef}
      onSwipeableClose={() => setVisible(false)}
      friction={2}
      containerStyle={styles.swipeable}
      overshootRight={false}
      renderRightActions={renderRightActions}
    >
      <Animated.View style={[styles.content, { height: itemHeight, opacity: itemOpacity }, style]}>
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
      </Animated.View>
    </Swipeable>
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
  index: PropTypes.number.isRequired,
  closeRow: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
