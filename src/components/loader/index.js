import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// import styles
import styles from './styles';
import config from '../../config';

// return the loader component
const Loader = function Loader({ style }) {
  return (
    <View style={[styles.loader, style]}>
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
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
