import React, { useState, useRef } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import MessageBox from '../../components/message-box';
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import config from '../../config';

// import styles
// import styles from './styles';
import stylesMain from '../../styles';

// import bcrypt package

// return the user settings screen component
const UserGroupScreen = function UserGroupScreen({ navigation }) {
  const messageBoxRef = useRef();

  // function variable boolean for loading
  const [loading] = useState(false);

  return (
    <ScreenDefault scrollEnabled>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />
      <MessageBox ref={messageBoxRef} />
      <TopNavigator navigation={navigation} />
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        {/* test */}
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
