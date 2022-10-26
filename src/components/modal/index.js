import React from 'react';
import {
  StyleSheet, Text, View, Modal, PressableView, Dimensions, TouchableOpacity,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = 150;

function SimpleModal() {
  return (
    <TouchableOpacity disabled style={styles.container}>
      <View style={styles.modal}>
        <Text> YES  weeeee</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    height: HEIGHT - 80,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },

});

export { SimpleModal };
