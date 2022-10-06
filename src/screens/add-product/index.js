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
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import BigTextWithDropdown from '../../components/big-text-with-dropdown';
import BigBtn from '../../components/big-btn';
import DateSelector from '../../components/date-picker';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const AddProductScreen = function AddProductScreen({ navigation }) {
  // available units to choose from
  const quantityTypes = [
    'units',
    'grams',
    'milliliters',
  ];

  // bar code scanner variables
  const [hasPermission, setHasPermission] = useState(null);
  const [scanner, setScanner] = useState(false);

  // variables to store the inputs
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityType, setQuantityType] = useState('units');
  const [date, setDate] = useState(new Date());

  // function variable boolean for loading
  const [loading, setLoading] = useState(false);

  // function for handling camera permissions
  const handlePermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(status === 'granted');

    if (status !== 'granted') {
      setTimeout(() => {
        setScanner(false);
      }, 1500);
    }
  };

  // function handling bar code scanned
  const handleBarCodeScanned = ({ type, data }) => {
    // if (type is ean 13, ean 8) {
    setScanner(false);

    // send data of barcode to the server to see if code is already known
    // set ingredient to the retrieved ingredient
    setIngredient(data);

    console.log(`barcode type: ${type}, with data ${data}`);
    // }
  };

  // function handling adding product
  const handleAddProduct = () => {
    setLoading(true);

    // send product to database to add it to the household

    console.log(`product ${ingredient}, ${quantity} ${quantityType}`);
  };

  // return the add product screen component
  return (
    <ScreenDefault>
      <Loader style={!loading ? stylesMain.hidden : {}} />

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
          style={styles.inputStyle}
          placeholder="Ingredient"
          value={ingredient}
          onChangeText={(ingredientValue) => {
            setIngredient(ingredientValue);
          }}
        />
        <BigTextWithDropdown
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="Quantity"
          value={quantity}
          onChangeText={(quantityValue) => {
            setQuantity(quantityValue);
          }}
          onChangeOption={(quantityIndex) => {
            setQuantityType(quantityTypes[quantityIndex]);
          }}
          defaultValue={quantityTypes[0]}
          options={quantityTypes}
        />
        <DateSelector
          style={styles.inputStyle}
          date={date}
          onDateChange={(selectedDate) => setDate(new Date(selectedDate))}
        />
        <BigBtn
          style={styles.addButton}
          title="ADD PRODUCT"
          onPress={() => handleAddProduct()}
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
