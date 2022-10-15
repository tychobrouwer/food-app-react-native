import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import config from '../src/config';

const BackArrowImage = function BackArrowImage({ width, height, style }) {
  return (
    <View style={{ width, height }}>
      <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 448 512">
        <Path fill={config.tertiaryColor} d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </Svg>
    </View>
  );
};

BackArrowImage.propTypes = {
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

BackArrowImage.defaultProps = {
  style: {},
};

export default BackArrowImage;
