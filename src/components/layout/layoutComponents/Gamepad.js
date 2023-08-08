import React from 'react';
import {View, StyleSheet, PanResponder} from 'react-native';

const Joystick = ({position, setPosition}) => {
  const handleMove = (evt, gesture) => {
    const newPosX = position.x + gesture.dx;
    const newPosY = position.y - gesture.dy;

    const maxDistance = 25;
    const distanceFromCenter = Math.sqrt(
      Math.pow(newPosX, 2) + Math.pow(newPosY, 2),
    );
    const limitedDistance = Math.min(distanceFromCenter, maxDistance);
    const angle = Math.atan2(newPosY, newPosX);
    const limitedPosX = limitedDistance * Math.cos(angle);
    const limitedPosY = limitedDistance * Math.sin(angle);

    // Update position state
    setPosition({x: limitedPosX, y: limitedPosY});
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handleMove,
    onPanResponderRelease: () => setPosition({x: 0, y: 0}),
  });

  return (
    <View style={styles.container}>
      <View style={styles.outerCircle} {...panResponder.panHandlers}>
        <View
          style={[
            styles.innerCircle,
            {transform: [{translateX: position.x}, {translateY: -position.y}]},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
  },
});

export default Joystick;
