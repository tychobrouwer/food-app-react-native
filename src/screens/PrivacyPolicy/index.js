import React from 'react';
import {
  View, WebView,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
// import styles from './styles';
import stylesMain from '../../styles';

// more imports

const PrivacyPolicyScreen = function PrivacyPolicyScreen({ navigation }) {
  const source = 'https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/file/d/1VQwxnlV_nZU_DmmvUsZ_UbWMesOZKgPo';

  return (
    <ScreenDefault scrollEnabled={false}>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <WebView javaScriptEnabled style={{ flex: 1 }} source={{ source }} />
        {/* </ScrollView> */}
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

PrivacyPolicyScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PrivacyPolicyScreen;
