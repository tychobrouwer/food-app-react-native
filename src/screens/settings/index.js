import React, { useContext, useState, useEffect } from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';

// import components and utils
import { GlobalStateContext, GlobalDispatchContext, SET_GROUP } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigBtn from '../../components/big-btn';
import { secureStoreDelete } from '../../utils/secure-store';
import { getGroups, getGroupUsers } from '../../api/group';

import ChevronImage from '../../../assets/chevron-image';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import config from '../../config';

// return the settings screen component
const SettingsScreen = function SettingsScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const { credentials, group } = useContext(GlobalStateContext);

  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [userGroups, setGroups] = useState([]);
  const starting = userGroups.find((userGroup) => userGroup.groupID === group);

  useEffect(() => {
    const getUserGroups = async () => {
      const groupsInfo = await getGroups(
        credentials.userID,
        credentials.passwordHash,
      );

      const owners = await Promise.all(groupsInfo.data.map(async (groupInfo) => {
        const groupUsers = await getGroupUsers(
          credentials.userID,
          credentials.passwordHash,
          groupInfo.GroupID,
        );

        const groupOwner = groupUsers.data.find((user) => user.UserID === groupUsers.groupOwner);

        return { ownerEmail: groupOwner.Email, groupID: groupInfo.GroupID };
      }));

      setGroups(owners);
    };

    getUserGroups();
  }, []);

  return (
    <ScreenDefault scrollEnabled={false}>
      <TopNavigator navigation={navigation} />
      <View style={styles.banner}>
        <Text style={styles.titleText}>
          Welcome
          {` ${credentials.firstName || ''}`}
        </Text>
        <Text style={styles.secondaryText}>
          {credentials.email}
        </Text>
      </View>
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        <BigBtn
          title="User Profile"
          onPress={() => {
            navigation.push('UserProfile');
          }}
        />
        <BigBtn
          title="User Groups"
          onPress={() => {
            navigation.push('UserGroup');
          }}
        />
        <ModalDropdown
          style={styles.dropdownStyle}
          defaultValue={
            (starting && starting.ownerEmail) || 'loading'
          }
          onSelect={(groupIndex) => {
            dispatch({ type: SET_GROUP, payload: userGroups[groupIndex].groupID });
          }}
          textStyle={[styles.dropdownText, styles.dropdownBtn]}
          dropdownTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdown}
          options={userGroups.map((groupInfo) => groupInfo.ownerEmail)}
          animated={false}
          onDropdownWillShow={() => {
            setDropdownStatus(true);
          }}
          onDropdownWillHide={() => setDropdownStatus(false)}
          renderRightComponent={() => (
            <View style={styles.dropdownChevron}>
              <ChevronImage
                width={25}
                height={25}
                style={(!dropdownStatus) ? { transform: [{ rotate: '180deg' }] } : {}}
                color={config.secondaryColor}
              />
            </View>
          )}
        />
        <BigBtn
          title="Privacy Policy"
          onPress={() => {
            navigation.push('PrivacyPolicy');
          }}
        />
        <BigBtn
          style={styles.signOutBtn}
          title="Log Out"
          onPress={() => {
            secureStoreDelete('email');
            secureStoreDelete('token');
            secureStoreDelete('group');

            navigation.replace('SignIn');
          }}
        />

      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsScreen;
