import React from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';

// import styles
import stylesMain from '../../styles';
import styles from './styles';

// return the default screen wrapper
const ScreenDefault = function ScreenDefault({ children }) {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={40}
    >
      <ScrollView bounces={false} decelerationRate="fast" keyboardShouldPersistTaps="handled">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={stylesMain.container}>
            { children }
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

ScreenDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenDefault;
