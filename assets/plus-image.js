import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const PlusImage = function PlusImage({ width, height, style }) {
  return (
    <View>
      <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 700 700">
        <Circle cx="350" cy="350" r="350" fill="#fff" />
      </Svg>
      <TouchableOpacity style={{ position: 'absolute' }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 700 700">
          <Path fill="#000" id="circle-plus-solid" d="M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0,0,114.6,0,256,114.6,512,256,512ZM232,344V280H168a24,24,0,0,1,0-48h64V168a24,24,0,0,1,48,0v64h64a24,24,0,0,1,0,48H280v64a24,24,0,0,1-48,0Z" transform="translate(94 94)" />
        </Svg>
      </TouchableOpacity>
    </View>

  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

PlusImage.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

PlusImage.defaultProps = {
  style: {},
};

export default PlusImage;
