import React, { useState } from 'react';
import {
  View, TouchableOpacity, TouchableWithoutFeedback, Text, Keyboard,
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
import BigTextWithDropdown from '../../components/big-text-with-dropdown';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const AddProductScreen = function AddProductScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanner, setScanner] = useState(false);

  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');

  const handlePermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(status === 'granted');

    if (status !== 'granted') {
      setTimeout(() => {
        setScanner(false);
      }, 1500);
    }
  };

  const handleBarCodeScanned = ({ type, data }) => {
    // if (type is ean 13, ean 8) {
    setScanner(false);

    // send data of barcode to the server to see if code is already known
    // set ingredient to the retrieved ingredient
    setIngredient(data);

    console.log(`barcode type: ${type}, with data ${data}`);
    // }
  };

  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => {
            handlePermissions();
            setScanner(true);
            Keyboard.dismiss();
          }}
        >
          <CameraImage width="70%" height="70%" />
        </TouchableOpacity>
        <BigTextInput
          style={{ marginBottom: '5%' }}
          placeholder="Ingredient"
          value={ingredient}
          onChangeText={(ingredientValue) => {
            setIngredient(ingredientValue);
          }}
        />
        <BigTextWithDropdown
          placeholder="Quantity"
          value={quantity}
          onChangeText={(quantityValue) => {
            setQuantity(quantityValue);
          }}
        />
      </View>
      <BottomNavigator navigation={navigation} />
      <TouchableWithoutFeedback onPress={() => setScanner(false)}>
        <View style={[styles.scannerContainer, !scanner ? { display: 'none' } : {}]}>
          {
            hasPermission === true && (
              <BarCodeScanner
                onBarCodeScanned={scanner ? handleBarCodeScanned : undefined}
                barCodeTypes={[
                  BarCodeScanner.Constants.BarCodeType.ean13,
                  BarCodeScanner.Constants.BarCodeType.ean8,
                  BarCodeScanner.Constants.BarCodeType.upc_a,
                  BarCodeScanner.Constants.BarCodeType.upc_e,
                ]}
                style={styles.scanner}
              />
            )
          }
          {
            hasPermission === false && (
              <View style={styles.cameraTextContainer}>
                <Text style={styles.cameraText}>Change permissions</Text>
                <Text style={styles.cameraText}>to access the camera.</Text>
              </View>
            )
          }
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
