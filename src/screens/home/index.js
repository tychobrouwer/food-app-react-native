import React, {
  useRef, useEffect, useState, useContext,
} from 'react';
import {
  Text, View, TouchableOpacity, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import { GlobalDispatchContext, GlobalStateContext, SET_INVENTORY } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import FoodListItem from '../../components/food-list-item';
import { getInventory, getUserGroups } from '../../api/inventory';
import MessageBox from '../../components/message-box';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const HomeScreen = function HomeScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const messageBoxRef = useRef();
  const { credentials, group, inventory } = React.useContext(GlobalStateContext);
  const [listItems, setListItems] = useState(inventory);

  const updateInventory = async () => {
    const groups = await getUserGroups(credentials.userID, credentials.passwordHash);

    let result;

    if (group) {
      if (groups.includes(group)) {
        result = await getInventory(credentials.userID, credentials.passwordHash, group);
      } else {
        messageBoxRef.current.createMessage('error', 'no permission to add to group');
      }
    } else {
      result = await getInventory(credentials.userID, credentials.passwordHash, undefined);
    }

    if (result.result) {
      setListItems(result.inventory);

      dispatch({ type: SET_INVENTORY, payload: result.inventory });
    } else {
      messageBoxRef.current.createMessage('error', 'unable to get your inventory');
    }
  };

  useEffect(() => {
    updateInventory();
  }, []);

  return (
    <ScreenDefault>
      <MessageBox ref={messageBoxRef} />
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            CALENDAR
          </Text>
        </TouchableOpacity>
        <ScrollView style={styles.itemList}>
          {
            listItems.map((item) => (
              <FoodListItem
                key={item.date}
                food={item.name}
                date={new Date(item.date)}
                quantity={item.quantity}
                quantityType={item.type}
              />
            ))
          }
        </ScrollView>
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
