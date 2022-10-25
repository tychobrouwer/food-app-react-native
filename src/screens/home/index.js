import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import {
  Text, View, FlatList, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import {
  GlobalDispatchContext, GlobalStateContext, SET_GROUPS, SET_INVENTORY,
} from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import FoodListItem from '../../components/food-list-item';
import { getInventory, removeFromInventory } from '../../api/inventory';
import MessageBox from '../../components/message-box';
import { getGroups } from '../../api/group';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import config from '../../config';

// return the home screen component
const HomeScreen = function HomeScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const messageBoxRef = useRef();
  const {
    credentials, group, inventory,
  } = useContext(GlobalStateContext);
  const [listItems, setListItems] = useState(inventory.sort((a, b) => b.date - a.date).reverse());
  const [refreshing, setRefreshing] = useState(false);

  const itemRow = [];
  let prevSelectedItem;

  const updateInventory = async () => {
    let result;

    const updateGroups = (await getGroups(
      credentials.userID,
      credentials.passwordHash,
    )).data.map((groupData) => groupData.GroupID);

    dispatch({ type: SET_GROUPS, payload: updateGroups });

    if (group) {
      if (updateGroups.includes(group)) {
        result = await getInventory(credentials.userID, credentials.passwordHash, group, false);
      } else {
        messageBoxRef.current.createMessage('error', 'No permission for this group');
      }
    } else {
      result = await getInventory(credentials.userID, credentials.passwordHash, undefined, false);
    }

    if (result.result) {
      const newItems = result.inventory.sort((a, b) => b.date - a.date).reverse();
      setListItems(newItems);

      dispatch({ type: SET_INVENTORY, payload: newItems });
    } else {
      messageBoxRef.current.createMessage('error', 'Unable to update your inventory');
    }
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const deleteItem = async ({ item }) => {
    const oldInventory = listItems;
    const newInventory = oldInventory.filter((item_) => item_.itemID !== item.itemID);
    setListItems(newInventory);

    const itemRemoveResult = await removeFromInventory(
      credentials.userID,
      credentials.passwordHash,
      group,
      false,
      item.itemID,
    );

    if (itemRemoveResult.result) {
      setListItems(itemRemoveResult.newInventory);
      dispatch({ type: SET_INVENTORY, payload: itemRemoveResult.newInventory });

      messageBoxRef.current.createMessage('success', `Removed ${item.name} from inventory`);
    } else {
      setListItems(oldInventory);

      messageBoxRef.current.createMessage('error', `Failed to remove ${item.name} from inventory`);
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
        showExpiration
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
            Calendar
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
                await updateInventory();
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

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
