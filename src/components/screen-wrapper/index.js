import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard } from 'react-native';

import { stylesMain } from '../../styles';

export default class ScreenDefault extends Component {
  render() { 
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          {...(Platform.OS === 'ios' && { behavior: 'padding' })}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={stylesMain.container}>
              { this.props.children }
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
