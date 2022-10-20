import React, { useState, useRef } from 'react';
import {
  Text, View, TouchableOpacity, Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

import config from '../../config';

// import styles
import styles from './styles';

// return the big button component
const SwipeableListItem = function SwipeableListItem({
  children, style, itemID, closeRow, deleteItem, innerRef, height,
}) {
  const [visible, setVisible] = useState(false);
  const itemHeight = useRef(new Animated.Value(height)).current;
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
    <GestureHandlerRootView>
      <Swipeable
        onSwipeableOpen={() => {
          setVisible(true);
          closeRow(itemID);
        }}
        ref={innerRef}
        onSwipeableClose={() => setVisible(false)}
        friction={2}
        containerStyle={styles.swipeable}
        overshootRight={false}
        renderRightActions={renderRightActions}
      >
        <Animated.View
          style={[
            styles.content, { height: itemHeight, opacity: itemOpacity }, style,
          ]}
        >
          { children }
        </Animated.View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

SwipeableListItem.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  children: PropTypes.node.isRequired,
  itemID: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  closeRow: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
};

SwipeableListItem.defaultProps = {
  style: {},
};

export default SwipeableListItem;
