import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Loader = function Loader({ style }) {
  return (
    <View style={[styles.loader, style]}>
      <ActivityIndicator
        color="#c98fe9"
        size="large"
      />
    </View>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

Loader.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
};

Loader.defaultProps = {
  style: {},
};

export default Loader;
