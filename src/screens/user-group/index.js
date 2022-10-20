import React, {
  useState, useRef, useEffect, useContext,
} from 'react';
import {
  View, Text, FlatList, RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import { GlobalDispatchContext, GlobalStateContext, SET_GROUPS } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import MessageBox from '../../components/message-box';
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import SwipeableListItem from '../../components/swipeable-list-item';
import BigBtn from '../../components/big-btn';
import {
  addToGroup, createGroup, getGroups, getGroupUsers,
} from '../../api/group';

import config from '../../config';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// import bcrypt package

// return the user settings screen component
const UserGroupScreen = function UserGroupScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const messageBoxRef = useRef();

  // function variable boolean for loading and refreshing
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // function variables
  const [email, setEmail] = useState('');
  const [listItems, setListItems] = useState([]);
  const { credentials, groups } = useContext(GlobalStateContext);

  const itemRow = [];
  let prevSelectedItem;

  const addUserToGroup = async () => {
    setLoading(true);

    if (groups.length === 0) {
      const newGroupResult = await createGroup(credentials.userID, credentials.passwordHash);

      const newGroups = JSON.parse(JSON.stringify(groups));
      newGroups.push(newGroupResult.groupID);

      const addToNewGroupResult = await addToGroup(
        credentials.userID,
        credentials.passwordHash,
        newGroupResult.groupID,
        credentials.email,
      );

      if (addToNewGroupResult.result) {
        dispatch({ type: SET_GROUPS, payload: newGroups });
      }
    }

    const addToGroupResult = await addToGroup(
      credentials.userID,
      credentials.passwordHash,
      groups[0],
      email,
    );

    if (addToGroupResult.result) {
      if (addToGroupResult.already) {
        messageBoxRef.current.createMessage('message', `${email} already in group`);
      } else {
        messageBoxRef.current.createMessage('success', `Successfully added ${email}`);
      }

      setEmail('');
    } else {
      messageBoxRef.current.createMessage('error', `Error adding ${email}`);
    }

    setLoading(false);
  };

  const updateGroup = async () => {
    const newGroups = (
      await getGroups(credentials.userID, credentials.passwordHash)
    ).data.map((groupData) => groupData.GroupID);
    dispatch({ type: SET_GROUPS, payload: newGroups });

    const groupUsers = (
      await getGroupUsers(credentials.userID, credentials.passwordHash, newGroups[0])
    ).data.map((groupData) => ({ userID: groupData.UserID, email: groupData.Email }));

    setListItems(groupUsers);
  };

  useEffect(() => {
    updateGroup();
  }, []);

  const deleteItem = async ({ item }) => {
    //
  };

  const renderItem = ({ item }, onClick) => {
    const closeRow = (indexToClose) => {
      if (prevSelectedItem && prevSelectedItem !== itemRow[indexToClose]) {
        prevSelectedItem.close();
      }
      prevSelectedItem = itemRow[indexToClose];
    };

    return (
      <SwipeableListItem
        style={styles.listItem}
        innerRef={(ref) => { itemRow[item.userID] = ref; }}
        closeRow={closeRow}
        itemID={item.userID}
        deleteItem={onClick}
        height={40}
      >
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{item.email}</Text>
        </View>
      </SwipeableListItem>
    );
  };

  return (
    <ScreenDefault scrollEnabled={false}>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />
      <MessageBox ref={messageBoxRef} />
      <TopNavigator navigation={navigation} />
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Group Profile
          </Text>
        </View>
        <Text style={styles.settingTitle}>Add email</Text>
        <BigTextInput
          style={{ marginBottom: 30 }}
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={(emailValue) => {
            setEmail(emailValue);
          }}
        />
        <BigBtn
          style={styles.saveBtn}
          title="Add to Group"
          onPress={() => {
            addUserToGroup();
          }}
        />
        <Text style={styles.settingTitle}>Users in group</Text>
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
                await updateGroup();
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
          keyExtractor={(item) => item.userID}
        />
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

UserGroupScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserGroupScreen;
