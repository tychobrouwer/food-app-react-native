import React from 'react';
import PropTypes from 'prop-types';

import {
  ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, Platform,
} from 'react-native';

import stylesMain from '../../styles';

const ScreenDefault = function ScreenDefault({ children }) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={stylesMain.container}>
            { children }
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

ScreenDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenDefault;
