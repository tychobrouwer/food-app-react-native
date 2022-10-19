import React, {
  useRef, useState, useImperativeHandle, forwardRef,
} from 'react';
import { Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';

// import styles
import styles from './styles';

// return the message box component
const MessageBox = forwardRef(({ style }, ref) => {
  const offset = useRef(new Animated.Value(-50)).current;

  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const animate = () => {
    Animated.sequence([
      Animated.spring(offset, {
        toValue: 50,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(800),
      Animated.spring(offset, {
        toValue: -50,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const createMessage = (newType, newMessage) => {
    setType(newType);
    setMessage(newMessage);

    animate();
  };

  useImperativeHandle(ref, () => ({
    createMessage(newType, newMessage) {
      createMessage(newType, newMessage);
    },
  }));

  const messageConstructor = () => {
    const splitMessage = message.match(/\b[\w\s]{20,}?(?=\s)|.+$/g);
    const elements = [];

    if (splitMessage) {
      for (let i = 0; i < splitMessage.length; i += 1) {
        elements.push(<Text key={i} style={[styles.text, styles[type]]}>{splitMessage[i]}</Text>);
      }
    }

    return elements;
  };

  return (
    <Animated.View
      style={[
        style,
        styles.box,
        styles[type],
        { transform: [{ translateY: offset }] },
      ]}
    >
      { messageConstructor() }
    </Animated.View>
  );
});

MessageBox.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
};

MessageBox.defaultProps = {
  style: {},
};

export default MessageBox;
