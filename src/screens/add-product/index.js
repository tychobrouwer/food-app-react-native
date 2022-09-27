import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { BarCodeScanner } from 'expo-barcode-scanner';

// import images used
import CameraImage from '../../../assets/camera-image';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const AddProductScreen = function AddProductScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanner, setScanner] = useState(false);

  const [ingredient, setIngredient] = useState('');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // if (type is ean 13, ean 8) {
    setScanner(false);

    // send data of barcode to the server to see if code is already known
    // set ingredient to the retrieved ingredient
    setIngredient(data);

    console.log(`barcode type: ${type}, with data ${data}`);
    // }
  };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => setScanner(true)}
        >
          <CameraImage width="70%" height="70%" />
        </TouchableOpacity>
        <BigTextInput
          placeholder="Ingredient"
          value={ingredient}
          onChangeText={(ingredientValue) => {
            setIngredient(ingredientValue);
          }}
        />
      </View>
      <BottomNavigator navigation={navigation} />
      <TouchableWithoutFeedback onPress={() => setScanner(false)}>
        <View style={[styles.scannerContainer, !scanner ? { display: 'none' } : {}]}>
          <BarCodeScanner
            onBarCodeScanned={scanner ? handleBarCodeScanned : undefined}
            style={styles.scanner}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScreenDefault>
  );
};

AddProductScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default AddProductScreen;
