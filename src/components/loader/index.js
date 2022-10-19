import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';

// import styles
import styles from './styles';

// return the loader component
const Loader = function Loader({ style, background }) {
  return (
    <View
      style={[
        styles.loader,
        style,
        background ? { backgroundColor: config.primaryColor } : {},
      ]}
    >
      <ActivityIndicator
        color={config.secondaryColor}
        size="large"
      />
    </View>
  );
};

Loader.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  background: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
