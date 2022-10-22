import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import Loader from '../../components/loader';

// import styles
import stylesMain from '../../styles';

const PrivacyPolicyScreen = function PrivacyPolicyScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const source = 'https://drive.google.com/u/2/uc?id=1MLZmkRLvNFwcfRVvUFS-aztT3qc09C9s&export=download';

  return (
    <ScreenDefault scrollEnabled={false}>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <WebView
          style={{ marginBottom: 30 }}
          source={{ uri: source }}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
        />
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
