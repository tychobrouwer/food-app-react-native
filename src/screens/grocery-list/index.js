import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  View, Text, FlatList, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import { getInventory, removeFromInventory } from '../../api/inventory';
import { GlobalDispatchContext, GlobalStateContext, SET_GROCERY } from '../../components/global-state';
import FoodListItem from '../../components/food-list-item';
import MessageBox from '../../components/message-box';

import config from '../../config';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const GroceryListScreen = function GroceryListScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const messageBoxRef = useRef();
  const {
    credentials, group, groups, grocery,
  } = useContext(GlobalStateContext);
  const [listItems, setListItems] = useState(
    grocery.sort((a, b) => a.name.localeCompare(b.name)),
  );
  const [refreshing, setRefreshing] = useState(false);

  const itemRow = [];
  let prevSelectedItem;

  const updateGroceryList = async () => {
    let result;

    if (group) {
      if (groups.includes(group)) {
        result = await getInventory(credentials.userID, credentials.passwordHash, group, true);
      } else {
        messageBoxRef.current.createMessage('error', 'No permission for this group');
      }
    } else {
      result = await getInventory(credentials.userID, credentials.passwordHash, undefined, true);
    }

    if (result.result) {
      const newItems = result.inventory.sort((a, b) => a.name.localeCompare(b.name));
      setListItems(newItems);

      dispatch({ type: SET_GROCERY, payload: newItems });
    } else {
      messageBoxRef.current.createMessage('error', 'Unable to update your grocery list');
    }
  };

  useEffect(() => {
    updateGroceryList();
  }, []);

  const deleteItem = async ({ item }) => {
    const oldGroceryList = listItems;
    const newGroceryList = oldGroceryList.filter((item_) => item_.itemID !== item.itemID);
    setListItems(newGroceryList);

    const itemRemoveResult = await removeFromInventory(
      credentials.userID,
      credentials.passwordHash,
      group,
      true,
      item.itemID,
    );

    if (itemRemoveResult.result) {
      setListItems(itemRemoveResult.newInventory);
      dispatch({ type: SET_GROCERY, payload: itemRemoveResult.newInventory });

      messageBoxRef.current.createMessage('success', `Removed ${item.name} from grocery list`);
    } else {
      setListItems(oldGroceryList);

      messageBoxRef.current.createMessage('error', `Failed to remove ${item.name} from grocery list`);
    }
  };

  const renderItem = ({ item }, onClick) => {
    const closeRow = (indexToClose) => {
      if (prevSelectedItem && prevSelectedItem !== itemRow[indexToClose]) {
        prevSelectedItem.close();
      }
      prevSelectedItem = itemRow[indexToClose];
    };

    return (
      <FoodListItem
        innerRef={(ref) => { itemRow[item.itemID] = ref; }}
        food={item.name}
        date={new Date(item.date)}
        quantity={item.quantity}
        quantityType={item.type}
        closeRow={closeRow}
        itemID={item.itemID}
        deleteItem={onClick}
        showExpiration={false}
      />
    );
  };

  return (
    <ScreenDefault scrollEnabled={false}>
      <MessageBox ref={messageBoxRef} />
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Grocery List
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
                await updateGroceryList();
                setRefreshing(false);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          data={listItems}
          extraData={listItems}
          renderItem={(v) => (
            renderItem(v, () => {
              deleteItem(v);
            })
          )}
          keyExtractor={(item) => item.itemID}
        />
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

GroceryListScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GroceryListScreen;
