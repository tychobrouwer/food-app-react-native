import React from 'react';
import {
  Text, View, TouchableOpacity, Button, TextInput, StyleSheet,
} from 'react-native';

// import vector icons used in search bar
import { Feather, Entypo } from '@expo/vector-icons';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';

// import styles
import styles from './styles';

// return the recipe screen component
const RecipesScreen = function RecipesScreen() {
  return (
    <ScreenDefault>

      <View style={styles.contentHeader}>
        <Text style={styles.contentHeaderText}>Recipe Book</Text>
      </View>

      <View style={styles.container}>
        <TextInput style={styles.searchInput} placeholder="Search for recipe..." />
      </View>

      <View style={styles.contentHeader2}>
        <Text style={styles.contentHeaderText}> Suggestions</Text>
      </View>

      <View style={styles.contentHeader2}>
        <Text style={styles.contentHeaderText}> My Meals</Text>
      </View>

    </ScreenDefault>
  );
};

export default RecipesScreen;
