import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import config from '../src/config';

const AddProductImage = function AddProductImage({
  width,
  height,
  style,
  onPress,
}) {
  return (
    <View style={[style, { width, height }]}>
      <Svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', marginTop: '-25%' }} width="100%" height="100%" viewBox="0 0 700 700">
        <Circle cx="350" cy="350" r="350" fill={config.tertiaryColor} />
      </Svg>
      <TouchableOpacity
        style={{
          width: '75%',
          height: '75%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '-12.5%',
        }}
        onPress={onPress}
      >
        <Svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
          <Path fill={config.primaryTextColor} id="circle-plus-solid" d="M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512ZM232,344V280H168a24,24,0,0,1,0-48h64V168a24,24,0,0,1,48,0v64h64a24,24,0,0,1,0,48H280v64a24,24,0,0,1-48,0Z" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

AddProductImage.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onPress: PropTypes.func.isRequired,
};

AddProductImage.defaultProps = {
  style: {},
};

export default AddProductImage;
