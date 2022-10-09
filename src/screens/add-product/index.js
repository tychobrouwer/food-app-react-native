import React, { useState, useRef } from 'react';
import {
  View, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { BarCodeScanner } from 'expo-barcode-scanner';

// import images used
import CameraImage from '../../../assets/camera-image';

// import components and utils
import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import BigTextWithDropdown from '../../components/big-text-with-dropdown';
import BigBtn from '../../components/big-btn';
import DateSelector from '../../components/date-picker';
import MessageBox from '../../components/message-box';
import { addToInventory, getUserGroups } from '../../api/inventory';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const AddProductScreen = function AddProductScreen({ navigation }) {
  const { credentials, group } = React.useContext(GlobalStateContext);

  // available units to choose from
  const quantityTypes = [
    'units',
    'grams',
    'milliliters',
    'liters',
  ];

  // bar code scanner variables
  const [hasPermission, setHasPermission] = useState(null);
  const [scanner, setScanner] = useState(false);
  const messageBoxRef = useRef();

  // variables to store the inputs
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityType, setQuantityType] = useState('units');
  const [date, setDate] = useState(new Date());

  // function variable boolean for loading
  const [loading, setLoading] = useState(false);

  const clearFields = () => {
    setIngredient('');
    setQuantity('');
    setDate(new Date());
  };

  // function for handling camera permissions
  const handlePermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();

    setHasPermission(status === 'granted');

    if (status !== 'granted') {
      setScanner(false);

      messageBoxRef.current.createMessage('error', 'Change permissions to access the camera');
    }
  };

  // function handling bar code scanned
  const handleBarCodeScanned = ({ type, data }) => {
    setScanner(false);

    // send data of barcode to the server to see if code is already known
    // set ingredient to the retrieved ingredient
    setIngredient(data);

    console.log(`barcode type: ${type}, with data ${data}`);
  };

  // function handling adding product
  const handleAddProduct = async () => {
    setLoading(true);

    const groups = await getUserGroups(credentials.userID, credentials.passwordHash);

    let result;

    if (group) {
      if (groups.includes(group)) {
        result = await addToInventory(
          credentials.userID,
          credentials.passwordHash,
          group,
          {
            name: ingredient, date: date.getTime(), quantity, type: quantityType,
          },
        );
      } else {
        messageBoxRef.current.createMessage('error', 'no permission to add to group');
      }
    } else {
      result = await addToInventory(
        credentials.userID,
        credentials.passwordHash,
        undefined,
        {
          name: ingredient, date: date.getTime(), quantity, type: quantityType,
        },
      );
    }

    if (result.result) {
      messageBoxRef.current.createMessage('success', `${ingredient} successfully added`);
    } else {
      messageBoxRef.current.createMessage('error', `${ingredient} not added`);
    }

    clearFields();
    setLoading(false);
  };

  // return the add product screen component
  return (
    <ScreenDefault>
      <Loader style={!loading ? stylesMain.hidden : {}} />
      <MessageBox ref={messageBoxRef} />

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
          onPress={() => {
            Keyboard.dismiss();

            if (ingredient !== '' && quantity !== '') {
              handleAddProduct();
            } else {
              messageBoxRef.current.createMessage('message', 'Enter all product information');
            }
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
