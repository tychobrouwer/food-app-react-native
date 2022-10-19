import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import config from '../src/config';

const ChevronImage = function ChevronImage({ width, height, style }) {
  return (
    <View style={{ width, height }}>
      <Svg xmlns="http://www.w3.org/2000/svg" style={style} width="100%" height="100%" viewBox="0 0 448 512">
        <Path fill={config.primaryTextColor} d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
      </Svg>
    </View>
  );
};

ChevronImage.propTypes = {
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
};

ChevronImage.defaultProps = {
  style: {},
};

export default ChevronImage;
