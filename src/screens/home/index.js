import React, { useContext } from 'react';
import {
  Text, Button, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import { secureStoreDelete } from '../../utils/secure-store';

const imageSource = require('../../../assets/settings.png');

const HomeScreen = function HomeScreen({ navigation }) {
  const globalState = useContext(GlobalStateContext);

  return (
    <ScreenDefault>
      <View style={{ marginTop: 70, flexDirection: 'row', alignItems: 'spaced-out' }}>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80, marginRight: '40%' }}
            source={imageSource}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ width: 80, height: 80 }}
            source={imageSource}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', marginTop: '10%' }}>
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 'auto', height: 50, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, }}>
          <Text style={{ fontSize: 32, marginTop: 'auto', marginBottom: 'auto', fontWeight: 'bold' }}>CALENDAR</Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', height: 80, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', height: 80, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', height: 80, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', height: 80, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', height: 80, width: '80%', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5, marginTop: 10 }}>
          <View style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          style={{ width: 80, height: 80 }}
          source={imageSource}
        />
        <Image
          style={{ width: 80, height: 80 }}
          source={imageSource}
        />
        <Image
          style={{ width: 80, height: 80 }}
          source={imageSource}
        />
      </View>
      {/* <Text style={{ marginTop: '40%' }}>
        This is&nbsp;
        { globalState.credentials.email }
        &apos;s profile
      </Text>

      <Button
        title="Logout"
        onPress={() => {
          console.log(`log out user: ${globalState.credentials.email}`);

          secureStoreDelete('email');
          secureStoreDelete('token');

          navigation.navigate('SignIn');
        }}
      /> */}

    </ScreenDefault>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
