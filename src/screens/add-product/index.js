import React, {
  useState, useRef, useContext, useEffect,
} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import { BarCodeScanner } from 'expo-barcode-scanner';

// import images used
import CameraImage from '../../../assets/camera-image';

// import components and utils
import {
  GlobalDispatchContext, GlobalStateContext, SET_GROCERY, SET_INVENTORY,
} from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import BigTextWithDropdown from '../../components/big-text-with-dropdown';
import BigBtn from '../../components/big-btn';
import DateSelector from '../../components/date-picker';
import MessageBox from '../../components/message-box';
import { addToInventory } from '../../api/inventory';
import capitalize from '../../utils/capitalize';
import { addBarCode, getBarCode } from '../../api/bar-code';
import PressableView from '../../components/pressable-view';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const AddProductScreen = function AddProductScreen({ navigation }) {
  const { credentials, group, groups } = useContext(GlobalStateContext);

  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

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
  const [scannerVisible, setScannerVisible] = useState(false);
  const messageBoxRef = useRef();
  const dropDownRef = useRef();

  // variables to store the inputs
  const [ingredient, setIngredient] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantityType, setQuantityType] = useState(quantityTypes[0]);
  const [date, setDate] = useState(new Date());
  const [grocery, setGrocery] = useState(false);
  const scannerOpacity = useRef(new Animated.Value(1)).current;
  const [code, setCode] = useState();
  const [barCodeResult, setBarCodeResult] = useState();

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

    if (status === 'granted') {
      setScanner(true);
    } else {
      setScanner(false);

      messageBoxRef.current.createMessage('error', 'Change permissions to access the camera');
    }
  };

  // function handling bar code scanned
  const handleBarCodeScanned = async ({ data }) => {
    setScanner(false);
    setCode(data);

    if (data !== code) {
      setBarCodeResult(await getBarCode(data));
    }

    if (barCodeResult) {
      messageBoxRef.current.createMessage('success', 'Bar code scanned');

      setIngredient(capitalize(barCodeResult.data.Name));
      setQuantity(String(barCodeResult.data.Quantity));
      setQuantityType(barCodeResult.data.QuantityType);
      dropDownRef.current.select(quantityTypes.indexOf(barCodeResult.data.QuantityType));
    } else {
      messageBoxRef.current.createMessage('message', 'Bar code was not found');
    }
  };

  useEffect(() => {
    if (scanner) {
      setScannerVisible(true);
    }

    Animated.parallel([
      Animated.timing(scannerOpacity, {
        toValue: scanner ? 1 : 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start(() => {
      if (!scanner) {
        setScannerVisible(false);
      }
    });
  }, [scanner]);

  // function handling adding product
  const handleAddProduct = async () => {
    setLoading(true);

    let result;

    if (group) {
      if (groups.includes(group)) {
        result = await addToInventory(
          credentials.userID,
          credentials.passwordHash,
          group,
          grocery,
          {
            name: ingredient, date: date.getTime(), quantity, type: quantityType,
          },
        );
      } else {
        messageBoxRef.current.createMessage('error', 'No permission to add to group');
      }
    } else {
      result = await addToInventory(
        credentials.userID,
        credentials.passwordHash,
        undefined,
        grocery,
        {
          name: ingredient, date: date.getTime(), quantity, type: quantityType,
        },
      );
    }

    if (result.result) {
      if (grocery) {
        dispatch({ type: SET_GROCERY, payload: result.newInventory });
      } else {
        dispatch({ type: SET_INVENTORY, payload: result.newInventory });
      }

      messageBoxRef.current.createMessage('success', `${ingredient} successfully added`);
    } else {
      messageBoxRef.current.createMessage('error', `Failed to add ${ingredient}`);
    }

    if (code) {
      await addBarCode(code, ingredient, quantity, quantityType);

      setCode(undefined);
    }

    clearFields();
    setLoading(false);
  };

  // return the add product screen component
  return (
    <ScreenDefault scrollEnabled>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />
      <MessageBox ref={messageBoxRef} />

      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <PressableView
          style={styles.cameraButton}
          onPress={() => {
            handlePermissions();
            Keyboard.dismiss();
          }}
        >
          <CameraImage width="70%" height="70%" />
        </PressableView>
        <PressableView
          style={styles.destinationWrapper}
          onPress={() => {
            setGrocery(!grocery);
          }}
        >
          <View style={[styles.destinationBtn, !grocery ? styles.selectorActive : {}]}>
            <Text style={styles.selectorText}>Inventory</Text>
          </View>
          <View style={[styles.destinationBtn, grocery ? styles.selectorActive : {}]}>
            <Text style={styles.selectorText}>Grocery</Text>
          </View>
        </PressableView>
        <BigTextInput
          style={styles.inputStyle}
          placeholder="Ingredient"
          value={ingredient}
          onChangeText={(ingredientValue) => {
            setIngredient(ingredientValue);
          }}
        />
        <BigTextWithDropdown
          dropDownRef={dropDownRef}
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
        {
          !grocery ? (
            <DateSelector
              style={styles.inputStyle}
              date={date}
              onDateChange={(selectedDate) => setDate(new Date(selectedDate))}
            />
          ) : (
            <View style={[styles.inputStyle, { height: 45 }]} />
          )
        }
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
        <Animated.View
          style={[
            styles.scannerContainer,
            !scannerVisible ? { display: 'none' } : {},
            { opacity: scannerOpacity },
          ]}
        >
          {
            hasPermission === true && scannerVisible && (
              <BarCodeScanner
                style={styles.scanner}
                onBarCodeScanned={handleBarCodeScanned}
                barCodeTypes={[
                  BarCodeScanner.Constants.BarCodeType.ean13,
                  BarCodeScanner.Constants.BarCodeType.ean8,
                  BarCodeScanner.Constants.BarCodeType.upc_a,
                  BarCodeScanner.Constants.BarCodeType.upc_e,
                ]}
              />
            )
          }
        </Animated.View>
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
