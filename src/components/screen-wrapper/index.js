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
const ScreenDefault = function ScreenDefault({ children, scrollEnabled }) {
  const content = (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesMain.container}>
        { children }
      </View>
    </TouchableWithoutFeedback>
  );

  if (scrollEnabled) {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          bounces={false}
          decelerationRate="fast"
          keyboardShouldPersistTaps="handled"
        >
          { content }
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={styles.wrapper}>
      <View style={stylesMain.container}>
        { children }
      </View>
    </View>
  );
};

ScreenDefault.propTypes = {
  children: PropTypes.node.isRequired,
  scrollEnabled: PropTypes.bool.isRequired,
};

export default ScreenDefault;
